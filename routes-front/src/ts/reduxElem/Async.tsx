// Упрощаем интерфейс серверной ошибки
export type Error = any;

// Типовой интерфейс для хранения состояния любого http запроса
export interface AsyncState<D> {
    isFetching: boolean;
    error: Error;
    data: D;
}

// Для уменьшения количества действий, определяем их состояние по статусам
export interface AsyncAction<P> {
    status?: 'error' | 'success';
    payload?: P | Error;
}