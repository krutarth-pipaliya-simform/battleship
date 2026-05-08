export interface ShipPlacement {
    size: number;
    start: {
        row: number;
        column: number;
    };
    direction: "Horizontal" | "Vertical";
}

export interface AllPlacement {
    [K: `player${number}`]: Array<ShipPlacement>;
}
