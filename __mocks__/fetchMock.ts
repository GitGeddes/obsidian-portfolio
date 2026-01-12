export function mockFetch(data: any) {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(data),
    });
}

export function mockFetchMultiple(data: any[]) {
    const mocked = jest.fn();
    data.forEach(d => {
        mocked.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(d),
        });
    });
    global.fetch = mocked;
}