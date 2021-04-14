export interface TASK {
    id: number;
    toggle: boolean;
    task: string;
    steps?: string[];
    addMyDay?: boolean;
    favourite?: boolean;
    note?: string;
}