import React, { useEffect, useState } from "react";
import { Column } from "@/components/Column";
import { DeleteSection } from "@/components/DeleteSection";

export const Board = () => {
  const [cards, setCards] = useState([]);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    const cardsData = localStorage.getItem("cards");

    setCards(cardsData ? JSON.parse(cardsData) : []);
    setHasChecked(true);
  }, []);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12 flex-col lg:flex-row">
      <Column
        title="Backlog"
        headingColour="text-neutral-500"
        column="backlog"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        headingColour="text-yellow-500"
        column="todo"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        headingColour="text-blue-500"
        column="doing"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Completed"
        headingColour="text-emerald-500"
        column="done"
        cards={cards}
        setCards={setCards}
      />
      <DeleteSection setCards={setCards} />
    </div>
  );
};
