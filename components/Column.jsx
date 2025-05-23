import React, { useRef, useState } from "react";
import { Card } from "@/components/Card";
import { DropIndicator } from "@/components/DropIndicator";
import { AddCard } from "@/components/AddTaskForm";

import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export const Column = ({ title, headingColour, column, cards, setCards }) => {
  const [active, setActive] = useState(false);
  const controller = useRef();
  const filteredCards = cards.filter((card) => card.column === column);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlight(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const clearHighlight = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    setActive(false);
    clearHighlight();
  };

  const handleDragEnd = (e) => {
    setActive(false);
    clearHighlight();

    const cardId = e.dataTransfer.getData("cardId");

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;

      cardToTransfer = { ...cardToTransfer, column };
      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);

      if (cardToTransfer.column === "done") {
        ShootConfetti();
      }
    }
  };

  const onInitHandler = ({ conductor }) => {
    controller.current = conductor;
  };

  const ShootConfetti = () => {
    controller.current.shoot();
  };


  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColour}`}>{title}</h3>
        <span className="text-sm text-neutral-400">{filteredCards.length}</span>
      </div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((card) => {
          return (
            <Card key={card.id} {...card} handleDragStart={handleDragStart} />
          );
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
      <Fireworks onInit={onInitHandler} />
    </div>
  );
};
