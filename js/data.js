/* =========================================================
   NOXERA DEMO DATA

   This is temporary local data.
   In the next phase, TMDB API will replace this.
========================================================= */

const movies = [

    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        runtime: "2h 28m",
        type: "movie",

        genres: ["Sci-Fi", "Thriller", "Action"],

        mood: ["mind", "night"],

        poster:
            "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",

        description:
            "A skilled thief who steals corporate secrets through dream-sharing technology is given a chance to erase his past by planting an idea into the mind of a target.",

        cast:
            "Leonardo DiCaprio • Joseph Gordon-Levitt • Tom Hardy • Ellen Page",

        recommendation:
            "You like stories that blur the line between reality and imagination."
    },

    {
        id: 2,
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        runtime: "2h 49m",
        type: "movie",

        genres: ["Sci-Fi", "Drama", "Adventure"],

        mood: ["mind", "emotional", "night"],

        poster:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5yI3B0H.jpg",

        description:
            "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",

        cast:
            "Matthew McConaughey • Anne Hathaway • Jessica Chastain • Michael Caine",

        recommendation:
            "Perfect when you want something emotional, ambitious and thought-provoking."
    },

    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        runtime: "2h 32m",
        type: "movie",

        genres: ["Action", "Crime", "Drama"],

        mood: ["adrenaline", "mind"],

        poster:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",

        description:
            "Batman faces a criminal mastermind whose reign of chaos pushes Gotham and its heroes to their limits.",

        cast:
            "Christian Bale • Heath Ledger • Aaron Eckhart • Gary Oldman",

        recommendation:
            "For nights when you want intensity, brilliant characters and unforgettable performances."
    },

    {
        id: 4,
        title: "Parasite",
        year: 2019,
        rating: 8.5,
        runtime: "2h 12m",
        type: "movie",

        genres: ["Drama", "Thriller", "Comedy"],

        mood: ["mind", "emotional"],

        poster:
            "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/ApiBzeaaXlWmHK2kRkGvY8h7r0L.jpg",

        description:
            "A struggling family gradually becomes entangled with a wealthy household, leading to an unexpected and dangerous turn of events.",

        cast:
            "Song Kang-ho • Lee Sun-kyun • Cho Yeo-jeong • Choi Woo-shik",

        recommendation:
            "A sharp choice if you enjoy layered stories with social commentary and surprises."
    },

    {
        id: 5,
        title: "Whiplash",
        year: 2014,
        rating: 8.5,
        runtime: "1h 47m",
        type: "movie",

        genres: ["Drama", "Music"],

        mood: ["adrenaline", "emotional"],

        poster:
            "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeNOVIE.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/fRGxZuo7jJUWQsVg9d3Y4Y3QxgI.jpg",

        description:
            "An ambitious young drummer enters an intense relationship with a demanding music instructor.",

        cast:
            "Miles Teller • J.K. Simmons • Paul Reiser • Melissa Benoist",

        recommendation:
            "A perfect match for competitive energy and stories about obsession."
    },

    {
        id: 6,
        title: "La La Land",
        year: 2016,
        rating: 8.0,
        runtime: "2h 08m",
        type: "movie",

        genres: ["Romance", "Drama", "Music"],

        mood: ["romantic", "feelgood", "emotional"],

        poster:
            "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/nE2SSqY7J2hJ5F2aQ3x7q0X8m6N.jpg",

        description:
            "A musician and aspiring actress fall in love while pursuing their dreams in Los Angeles.",

        cast:
            "Ryan Gosling • Emma Stone • John Legend • Rosemarie DeWitt",

        recommendation:
            "For romantic evenings, beautiful music and bittersweet dreams."
    },

    {
        id: 7,
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: 8.1,
        runtime: "1h 40m",
        type: "movie",

        genres: ["Comedy", "Drama", "Adventure"],

        mood: ["feelgood", "night"],

        poster:
            "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg0pXK8Yj4e7F.jpg",

        description:
            "The adventures of a legendary concierge and his young lobby boy unfold in a fictional European hotel.",

        cast:
            "Ralph Fiennes • Tony Revolori • Saoirse Ronan • Adrien Brody",

        recommendation:
            "A stylish feel-good choice when you want something charming and unusual."
    },

    {
        id: 8,
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        rating: 8.3,
        runtime: "1h 48m",
        type: "movie",

        genres: ["Romance", "Drama", "Sci-Fi"],

        mood: ["romantic", "emotional", "mind"],

        poster:
            "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5m5A0B.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/7aHhP3h2q4gX7J5mY2z2F7M3f4D.jpg",

        description:
            "After a painful breakup, a couple undergoes a procedure to erase memories of each other.",

        cast:
            "Jim Carrey • Kate Winslet • Mark Ruffalo • Kirsten Dunst",

        recommendation:
            "For an emotional night when you want romance with a strange and beautiful twist."
    },

    {
        id: 9,
        title: "Mad Max: Fury Road",
        year: 2015,
        rating: 8.1,
        runtime: "2h 00m",
        type: "movie",

        genres: ["Action", "Adventure", "Sci-Fi"],

        mood: ["adrenaline"],

        poster:
            "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/8yB2W5m8mYkM3p7vP4k9e2z6xQ.jpg",

        description:
            "In a ruined wasteland, Max joins Furiosa and a group of rebels fleeing a tyrannical ruler.",

        cast:
            "Tom Hardy • Charlize Theron • Nicholas Hoult • Hugh Keays-Byrne",

        recommendation:
            "When you want pure cinematic adrenaline with almost no downtime."
    },

    {
        id: 10,
        title: "Before Sunrise",
        year: 1995,
        rating: 8.1,
        runtime: "1h 41m",
        type: "movie",

        genres: ["Romance", "Drama"],

        mood: ["romantic", "night"],

        poster:
            "https://image.tmdb.org/t/p/w500/kf7o2G0GmN3R8d2h7x0aJ0q1e8B.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/4Vx0H4Yk1T6h9L3F5Q2P7W8D9M.jpg",

        description:
            "Two strangers meet on a train and spend one unforgettable night walking through Vienna and talking about life.",

        cast:
            "Ethan Hawke • Julie Delpy",

        recommendation:
            "For a quiet night when conversation and chemistry matter more than action."
    }

];


const series = [

    {
        id: 101,
        title: "Breaking Bad",
        year: 2008,
        rating: 9.5,
        runtime: "5 Seasons",
        type: "series",

        genres: ["Crime", "Drama", "Thriller"],

        mood: ["adrenaline", "mind"],

        poster:
            "https://image.tmdb.org/t/p/w500/ztkUQFLlC8XkJ7Q4x1V8x7y8x9.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",

        description:
            "A chemistry teacher diagnosed with cancer turns to manufacturing methamphetamine to secure his family's future.",

        cast:
            "Bryan Cranston • Aaron Paul • Anna Gunn • Dean Norris",

        recommendation:
            "One of the strongest choices if you want character development and escalating tension."
    },

    {
        id: 102,
        title: "Stranger Things",
        year: 2016,
        rating: 8.6,
        runtime: "4 Seasons",
        type: "series",

        genres: ["Sci-Fi", "Drama", "Horror"],

        mood: ["night", "adrenaline", "feelgood"],

        poster:
            "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rV9q0Yp4nZ6H.jpg",

        description:
            "A group of friends uncover supernatural mysteries after a young boy mysteriously disappears.",

        cast:
            "Millie Bobby Brown • Finn Wolfhard • David Harbour • Winona Ryder",

        recommendation:
            "Perfect for a nostalgic night with mystery, friendship and supernatural chaos."
    },

    {
        id: 103,
        title: "Dark",
        year: 2017,
        rating: 8.7,
        runtime: "3 Seasons",
        type: "series",

        genres: ["Mystery", "Sci-Fi", "Drama"],

        mood: ["mind", "night"],

        poster:
            "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/9yM9hV5H7J8q1K0p3Q4r2Z6W8T.jpg",

        description:
            "A missing child exposes secrets spanning generations in a small German town where time itself becomes part of the mystery.",

        cast:
            "Louis Hofmann • Lisa Vicari • Oliver Masucci • Jördis Triebel",

        recommendation:
            "For viewers who want complex timelines, mysteries and serious atmosphere."
    },

    {
        id: 104,
        title: "The Bear",
        year: 2022,
        rating: 8.6,
        runtime: "3 Seasons",
        type: "series",

        genres: ["Drama", "Comedy"],

        mood: ["emotional", "adrenaline", "feelgood"],

        poster:
            "https://image.tmdb.org/t/p/w500/sHFlbKS3GbqLJXrJHqX5jTq0V6F.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/zN4Jq0W6pT3L7x9V2Q8K5m1Y4R.jpg",

        description:
            "A young chef returns to Chicago to run his family's sandwich shop and discovers the chaotic world of professional kitchens.",

        cast:
            "Jeremy Allen White • Ayo Edebiri • Ebon Moss-Bachrach",

        recommendation:
            "For intense character-driven storytelling with heart, chaos and great performances."
    },

    {
        id: 105,
        title: "The Queen's Gambit",
        year: 2020,
        rating: 8.5,
        runtime: "1 Season",
        type: "series",

        genres: ["Drama"],

        mood: ["mind", "emotional"],

        poster:
            "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/34OGjFEbHj0E3lE2d1Y4N6m5Q8P.jpg",

        description:
            "An orphaned chess prodigy rises through the competitive chess world while struggling with addiction and loneliness.",

        cast:
            "Anya Taylor-Joy • Thomas Brodie-Sangster • Moses Ingram",

        recommendation:
            "A strong choice when you want ambition, intelligence and emotional depth."
    }

];
