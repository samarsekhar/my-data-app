export const initData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-1", "column-2", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "Todo 1",
          cardOrder: ["card-1", "card-2", "card-3"],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "title of card 1",
              image: null,
            },

            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "title of card 2",
              image: null,
            },
          ],
        },

        {
          id: "column-2",
          boardId: "board-1",
          title: "Todo 2",
          cardOrder: ["card-1", "card-2"],
          cards: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "title of card 1",
              image: null,
            },

            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-2",
              title: "title of card 2",
              image: null,
            },
          ],
        },
      ],
    },
  ],
};
