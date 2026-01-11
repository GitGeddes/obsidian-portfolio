test('Environment variable is set', () => {
    expect(process.env.NEXT_PUBLIC_GITHUB_TOKEN).toBeDefined();
});