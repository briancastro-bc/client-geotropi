export interface HttpRepository {
    get<T>(
        url: string,
        options?: Record<string, any>
    ): Promise<T>;
    getAll<T>(
        url: string,
        options?: Record<string, any>
    ): Promise<Array<T>>;
    post<T>(
        url: string,
        body: any,
        options?: Record<string, any>
    ): Promise<T>;
    put<T>(
        url: string,
        body: any,
        options?: Record<string, any>
    ): Promise<T>;
    patch<T>(
        url: string,
        body: any,
        options?: Record<string, any>
    ): Promise<T>;
    delete<T>(
        url: string,
        options?: Record<string, any>
    ): Promise<T>;
}
