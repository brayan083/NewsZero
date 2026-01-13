import { useState, useEffect } from 'react';
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface NewsItem {
    id: string;
    title: string;
    category: string;
    timeAgo: string;
    imageUrl?: string;
    description?: string;
    source?: string;
    url?: string;
}

interface FirestoreNewsItem {
    id: string;
    titulo: string;
    categoria: string;
    fecha: any; // Firestore Timestamp
    fuente: string;
    resumen: string;
    url: string;
    imagen?: string; // Assuming 'imagen' might exist based on standard patterns, or mapped to undefined
}

export function useNews(category?: string, limitCount: number = 20) {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                // User DB structure: collection 'noticias_diarias' -> doc (YYYY-MM-DD) -> field 'noticias' (array)
                // We fetch the most recent daily document.
                const newsRef = collection(db, 'noticias_diarias');
                // Assuming doc IDs are dates (YYYY-MM-DD), ordering by ID desc gives latest date.
                // Alternatively, order by a 'date' field if it exists on the doc, but ID sort is usually sufficient for ISO dates.
                const q = query(newsRef, orderBy('__name__', 'desc'), limit(1));

                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    setNews([]);
                    setLoading(false);
                    return;
                }

                // Get the latest document
                const latestDoc = querySnapshot.docs[0];
                const data = latestDoc.data();
                const rawNewsArray: FirestoreNewsItem[] = data.noticias || [];

                // Map and Filter
                let mappedNews: NewsItem[] = rawNewsArray.map((item) => {
                    const categoryLower = item.categoria.toLowerCase();
                    let fallbackImage = '/categories/global.png'; // Default

                    if (categoryLower.includes('tech') || categoryLower.includes('tecnologia')) fallbackImage = '/categories/tech.png';
                    else if (categoryLower.includes('crypto') || categoryLower.includes('finanzas') || categoryLower.includes('bitcoin')) fallbackImage = '/categories/crypto.png';
                    else if (categoryLower.includes('argentina') || categoryLower.includes('politica')) fallbackImage = '/categories/argentina.png';

                    return {
                        id: item.id || Math.random().toString(36).substr(2, 9),
                        title: item.titulo,
                        category: item.categoria,
                        timeAgo: calculateTimeAgo(item.fecha?.toDate ? item.fecha.toDate() : new Date(item.fecha)),
                        imageUrl: item.imagen || fallbackImage,
                        description: item.resumen,
                        source: item.fuente,
                        url: item.url
                    };
                });

                if (category && category !== 'All') {
                    const catParam = category.toLowerCase();
                    mappedNews = mappedNews.filter(n => {
                        const itemCat = n.category.toLowerCase();

                        // Crypto logic
                        if (catParam === 'crypto' || catParam === 'cripto') {
                            return itemCat.includes('crypto') || itemCat.includes('cripto') || itemCat.includes('bitcoin') || itemCat.includes('finance') || itemCat.includes('finanzas') || itemCat.includes('eco/');
                        }

                        // Tech logic
                        if (catParam === 'tech') {
                            return itemCat.includes('tech') || itemCat.includes('tecnologia') || itemCat.includes('ia') || itemCat.includes('cyber');
                        }

                        // Argentina logic
                        if (catParam === 'argentina') {
                            return itemCat.includes('argentina') || itemCat.includes('politica') || itemCat.includes('buenos aires');
                        }

                        // Global logic
                        if (catParam === 'global') {
                            return itemCat.includes('global') || itemCat.includes('internacional') || itemCat.includes('mundo') || itemCat.includes('world');
                        }

                        // Default strict match
                        return itemCat === catParam;
                    });
                }

                // Apply limit
                setNews(mappedNews.slice(0, limitCount));

            } catch (err: any) {
                console.error("Error fetching news:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category, limitCount]);

    return { news, loading, error };
}

function calculateTimeAgo(date: Date) {
    if (!date) return "Recently";
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const interval = Math.floor(seconds / 31536000);

    if (interval > 1) return interval + " years ago";
    if (interval === 1) return interval + " year ago";
    const months = Math.floor(seconds / 2592000);
    if (months > 1) return months + " months ago";
    if (months === 1) return months + " month ago";
    const days = Math.floor(seconds / 86400);
    if (days > 1) return days + " days ago";
    if (days === 1) return days + " day ago";
    const hours = Math.floor(seconds / 3600);
    if (hours > 1) return hours + "h ago";
    if (hours === 1) return hours + "h ago";
    const minutes = Math.floor(seconds / 60);
    if (minutes > 1) return minutes + "m ago";
    if (minutes === 1) return minutes + "m ago";
    return "Just now";
}
