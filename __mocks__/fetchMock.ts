export function mockFetch(data: any) {
    global.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(data),
        })
    );
}