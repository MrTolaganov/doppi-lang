interface AvfzalKamchilik {
    Avfzal: {
        title: string;
        description: string;
    }[];
    Kamchilik: {
        title: string;
        description: string;
    }[];
}
//@ts-nocheck
export const avfzalKamchilik: AvfzalKamchilik = {
    Avfzal: [
        {
            title: "Ko'd sintaksis qulayligi va kodlar sonining qisqarishi",
            description: "Doppida yoziladigan kodlar maksimal darjada qisqartirildi, va universal funksinalligi oshiildi"
        },
        {
            title: "O'zbek tilida tushunarli kod, kodlar birlashishi uchun qulayligi",
            description: "Doppi lang kodlari to'liq o'zbek tilida yoziladi, va o'zbek tiliga yoziladigan kodlar birlashishi uchun qulayligi oshirildi"
        },
        {
            title: "Yangi o'zgarishlar",
            description: "Yoshlarga qulaylik yaratish maqsadidad dasturlash uchun ba'zi kichik yangi o'zgarishlar kiritilmoqda misol uchun kichik detal (increment hamda decrement)"
        },
        {
            title: "Yodamchi sifatida extension mavjudligi",
            description: "Xususan Doppi Lang uchun yordamchi sifatida (snippet,intellisense,highlighter) extension qo'shildi"
        },
        {
            title: "Universallik",
            description: "Bu tilni o'rganish bilan birga istalgan tilni davom ettirish mumkun chunki bu til sintaksisi hamda funksionallik qismlari turi dasturlash tillaridan olingan misol uchun (pascal,js,cpp,python)"
        },
        {
            title: "Qoidalarga amal qilish",
            description: "Dasturlash tilidagi ma'lum qoidalarga amal qilish (bu proyektlarda emas balki foundation kodlar uchun asosan)"
        }
    ],
    Kamchilik: [
        {
            title: "Doppi tillar orasidagi aloqa bog'lanish",
            description: "Kutilayotgan imkoniyat"
        },
        {
            title: "Dastur tezligi pastligi",
            description: "dastur ishga tushirilganda boshqa tillarga qaraganda sekinroq ishga tushishi mumkun lekin bu ustida ishlaymiz (sabab bu dasturlash tili mashina tili ustiga emas balki boshqa bir dasturlash tili ustiga qurilgan tezlik susayishining asosiy sababi ham shunda)"
        },
        {
            title: "Noqulay qoidalar",
            description: "Doppi da kod yozish chog'ida bazibir qo'shimcha qoidalar kiritlgan (misol uchun sikl hamda rekursiya ishida o'zgaruvchi yaratish imkoniyati olib tashlangan)"
        },
        {
            title: "Grafik imkoniyatlar",
            description: "hali kutilmoqda"
        },
        {
            title: "Muhit yagona ekanligi",
            description: "Hozirda muhit sifatida Visual Studio Code dasturi ishlatilmoqda sabab hozirda faqat shu muhit uchun yordamchi extension ishlab chiqildi"
        },
        {
            title: "Yagona Tizim",
            description: "Til hozirda faqatgina windows tizimi uchun ishlab chiqildi, faqatgina windows tizimi bilan aloqaga kirisha oladi."
        }
    ]
};
