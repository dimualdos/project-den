export interface ITasksItems {
    id: number,
    descripion: string,
    name: string
}

export interface ITasksID {
    id: number,
    type: number,
    name: string,
    descripion: string,
    payload: [],
    level: number,
    src: string,
    authors: []
}

export interface IGetItemsTasks {
    data: ITasksID,
    success: boolean
}
