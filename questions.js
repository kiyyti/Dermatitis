let questions = [
    {
        numb: 0,
        question: "ช่วงอายุของผู้ป่วย",
        answer: "a",
        options: [
            "A. อายุน้อยกว่า 2 ปี",
            "B. อายุมากกว่า 2 ปี"
        ]
    },
    
    {
        numb: 1,
        type: "Major",
        question: "อาการคันของผื่น",
        options: [
            "A. มีอาการคันในตำแหน่งผื่น",
            "B. เกา หรือ ถู บริเวณผื่น บ่อยครั้ง",
            "C. มีร่องรอย เลือดออก ตำแหน่งผื่นหลังการเกา",
            "D. ไม่มีอาการดังกล่าว"
        ],
        answer: ["A. มีอาการคันในตำแหน่งผื่น", "B. เกา หรือ ถู บริเวณผื่น บ่อยครั้ง", "C. มีร่องรอย เลือดออก ตำแหน่งผื่นหลังการเกา"]
    },

    {
        numb: 2,
        type: "Major",
        question: "ความเรื้อรังของผื่น",
        options: [
            "A. เป็นผื่นลักษณะนี้ครั้งแรก",
            "B. เคยมีผื่นมากก่อนหน้านี้ โดยมีอาการเป็น ๆ หาย ๆ",
            "C. มีผื่นมาก่อนหน้านี้ เคยรับการรักษาโดยการทายา อาการดีขึ้น และกลับเป็นซ้ำ",
            "D. อื่นๆ"
        ],
        answer: [
            "B. เคยมีผื่นมากก่อนหน้านี้ โดยมีอาการเป็น ๆ หาย ๆ",
            "C. มีผื่นมาก่อนหน้านี้ เคยรับการรักษาโดยการทายา อาการดีขึ้น และกลับเป็นซ้ำ"
        ]
    },

    {
        numb: 3,
        type: "Major",
        question: "ตำแหน่งของผื่น",
        options: [
            "A. ใบหน้า/แก้ม",
            "B. หนังศรีษะ",
            "C. ไรผม",
            "D. ด้านนอกของแขน และ ขา",
            "E. ลำตัว",
            "F. ข้อพับแขน",
            "G. ข้อพับขา"
        ],
        answer: [
            // "A. ใบหน้า/แก้ม",
            // "B. หนังศรีษะ",
            // "C. ไรผม",
            // "D. ด้านนอกของแขน และ ขา",
            // "E. ลำตัว",
            // "F. ข้อพับแขน",
            // "G. ข้อพับขา"
            "S."
        ]
    },

    {
        numb: 4,
        type: "Major",
        question: "ประวัติภูมิแพ้",
        options: [
            "A. คนไข้ได้รับการวินิจฉัยเป็นโรคภูมิแพ้อื่นๆ ได้แก่ ภูมิแพ้ทางเดินหายใจ หรือ หอบหืด",
            "B. บิดา หรือ มารดา เป็นโรคภูมิแพ้อย่างใด อย่างหนึ่ง ได้แก่ ผื่นภูมิแพ้ ภูมิแพ้ทางเดินหายใจ หรือ หอบหืด",
            "C. ไม่ตรงกับข้อใดเลย"
        ],
        answer: [
            "A. คนไข้ได้รับการวินิจฉัยเป็นโรคภูมิแพ้อื่นๆ ได้แก่ ภูมิแพ้ทางเดินหายใจ หรือ หอบหืด",
            "B. บิดา หรือ มารดา เป็นโรคภูมิแพ้อย่างใด อย่างหนึ่ง ได้แก่ ผื่นภูมิแพ้ ภูมิแพ้ทางเดินหายใจ หรือ หอบหืด"
        ]
    },

    {
        numb: 5.1,
        type: "Minor",
        question: "มีอาการผิวแห้ง",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.2,
        type: "Minor",
        question: "มีอาการผิวหนังรอบดวงตา แห้ง คล้ำ",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.3,
        type: "Minor",
        question: "มีอาการผื่นวงขาวตามร่างกาย / เกลื้อนน้ำนม",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.4,
        type: "Minor",
        question: "เส้นลายมือหนา",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.5,
        type: "Minor",
        question: "มีอาการผื่นแห้งรอบปาก",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.6,
        type: "Minor",
        question: "มีอาการคันตา ตาอักเสบเรื้อรัง",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.7,
        type: "Minor",
        question: "มีอาการตุ่มนูนรอบรูขุมขน",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.8,
        type: "Minor",
        question: "มีอาการผื่นแห้งคันรอบหัวนม",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.9,
        type: "Minor",
        question: "มีอาการคันเมื่อมีเหงื่อ",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: "5.10",
        type: "Minor",
        question: "มีประวัติแพ้อาหารหรือนม",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.11,
        type: "Minor",
        question: "มีอาการระคายเคืองเมื่อใส่เสื้อผ้าเนื้อหยาบ",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.12,
        type: "Minor",
        question: "มีอาการผื่นเปลี่ยนแปลงตามฤดูกาล",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.13,
        type: "Minor",
        question: "มีรอยขาวหลังถูกขีดที่ผิวหนัง",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.14,
        type: "Minor",
        question: "มีรอยพับเป็นเส้น บริเวณคอ",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    },

    {
        numb: 5.15,
        type: "Minor",
        question: "ผื่นเริ่มเกิดขึ้นตั้งแต่อายุน้อยกว่า 2 ปี",
        options: [
            "A. มี",
            "B. ไม่มี"
        ],
        answer: "A. มี"
    }
];