type CachedData<T> = {
    value: T;
    timestamp: number;
    ttl: number;
}

function getCachedData<T>(key: string) {
    try {
        const item = localStorage.getItem(key);
        if (!item) return null;

        const parsedItem: CachedData<T> = JSON.parse(item);
        const now = Date.now();

        if (now - parsedItem.timestamp > parsedItem.ttl) {
            localStorage.removeItem(key);
            return null;
        }

        return parsedItem;
    } catch {
        return null;
    }
}

function setCachedData<T>(key: string, value: T, ttl: number) {
    const item = {
        value,
        timestamp: Date.now(),
        ttl: ttl * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function invalidateCache(key: string) {
    localStorage.removeItem(key);
}

export default function useCache<T>() {
    const getCachedDataWrapper = (key: string) => {
        return getCachedData<T>(key);
    }

    const setCachedDataWrapper = (key: string, value: T, ttl: number) => {
        setCachedData<T>(key, value, ttl);
    }

    return {
        getCachedData: getCachedDataWrapper,
        setCachedData: setCachedDataWrapper,
        invalidateCache
    };
}