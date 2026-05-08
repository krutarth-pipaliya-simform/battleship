export interface ShipPlacement {
    size: 2 | 3;
    start: {
        row: 1 | 2 | 3 | 4 | 5 | 6;
        column: 1 | 2 | 3 | 4 | 5 | 6;
    };
    direction: "Horizontal" | "Vertical";
}

export interface AllPlacement {
    [K: `player${number}`]: Array<ShipPlacement>;
}
