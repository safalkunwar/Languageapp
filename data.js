const curriculum = [
    {
        id: "level-1",
        title: "Level 1: Greetings & Basics",
        description: "Essential greetings to start a conversation.",
        items: [
            { 
                english: "Hello", breakdown: "heh-loh", chinese: "你好", pinyin: "nǐ hǎo", emoji: "👋",
                detailsEn: "The most common and standard greeting used at any time of day.",
                detailsZh: "最常见和标准的问候语，可在任何时间使用。",
                exampleEn: "Hello! It is nice to meet you today.",
                exampleZh: "你好！今天很高兴见到你。"
            },
            { 
                english: "Thank you", breakdown: "thangk yoo", chinese: "谢谢", pinyin: "xiè xiè", emoji: "🙏",
                detailsEn: "Used to show gratitude or appreciation.",
                detailsZh: "用于表达感激或感谢之情。",
                exampleEn: "Thank you so much for helping me with my work.",
                exampleZh: "非常感谢你帮我完成工作。"
            },
            { 
                english: "Goodbye", breakdown: "good-by", chinese: "再见", pinyin: "zài jiàn", emoji: "🚶‍♂️",
                detailsEn: "Used when parting ways. Literally translates to 'again see'.",
                detailsZh: "分别时使用的用语。字面意思是“再次相见”。",
                exampleEn: "I have to go home now. Goodbye!",
                exampleZh: "我现在得回家了。再见！"
            },
            { 
                english: "Yes", breakdown: "yes", chinese: "是", pinyin: "shì", emoji: "✅",
                detailsEn: "Used to give an affirmative response. In Chinese, '是' is often used to mean 'to be' or 'correct'.",
                detailsZh: "用于给予肯定的回答。",
                exampleEn: "Yes, I would love to go to the park with you.",
                exampleZh: "是的，我很乐意和你一起去公园。"
            },
            { 
                english: "No", breakdown: "noh", chinese: "不", pinyin: "bù", emoji: "❌",
                detailsEn: "Used to give a negative response. Often placed before a verb in Chinese.",
                detailsZh: "用于给予否定的回答。",
                exampleEn: "No, I do not want any more coffee.",
                exampleZh: "不，我不想再喝咖啡了。"
            },
            { 
                english: "Please", breakdown: "pleez", chinese: "请", pinyin: "qǐng", emoji: "🥺",
                detailsEn: "Used to be polite when asking for something.",
                detailsZh: "请求某物或某事时用于表达礼貌的词语。",
                exampleEn: "Could you please pass me the salt?",
                exampleZh: "你能把盐递给我吗，请？"
            },
            { 
                english: "Excuse me", breakdown: "ek-skyooz mee", chinese: "打扰一下", pinyin: "dǎ rǎo yī xià", emoji: "🙋‍♂️",
                detailsEn: "Used to get someone's attention politely or apologize for an interruption.",
                detailsZh: "用于礼貌地引起某人注意或为打扰道歉。",
                exampleEn: "Excuse me, do you know what time it is?",
                exampleZh: "打扰一下，你知道现在几点吗？"
            },
            { 
                english: "Sorry", breakdown: "sor-ee", chinese: "对不起", pinyin: "duì bù qǐ", emoji: "🙇‍♂️",
                detailsEn: "Used to express apology or regret.",
                detailsZh: "用于表达歉意或遗憾。",
                exampleEn: "I am very sorry for being late to the meeting.",
                exampleZh: "开会迟到我非常对不起。"
            }
        ]
    },
    {
        id: "level-2",
        title: "Level 2: Numbers & Time",
        description: "Counting and telling time.",
        items: [
            { 
                english: "Time", breakdown: "tym", chinese: "时间", pinyin: "shí jiān", emoji: "⏰",
                detailsEn: "The concept of duration or a specific moment.",
                detailsZh: "持续的概念或特定的时刻。",
                exampleEn: "Do you have time to grab a coffee this afternoon?",
                exampleZh: "你今天下午有时间喝杯咖啡吗？"
            },
            { 
                english: "Today", breakdown: "tuh-day", chinese: "今天", pinyin: "jīn tiān", emoji: "📅",
                detailsEn: "The current day.",
                detailsZh: "当前的一天。",
                exampleEn: "Today is a very beautiful and sunny day.",
                exampleZh: "今天是一个非常美丽阳光明媚的日子。"
            },
            { 
                english: "Tomorrow", breakdown: "tuh-mor-oh", chinese: "明天", pinyin: "míng tiān", emoji: "🔜",
                detailsEn: "The day after today.",
                detailsZh: "今天之后的一天。",
                exampleEn: "I will finish this project by tomorrow morning.",
                exampleZh: "我会在明天早上之前完成这个项目。"
            },
            { 
                english: "Yesterday", breakdown: "yes-ter-day", chinese: "昨天", pinyin: "zuó tiān", emoji: "🔙",
                detailsEn: "The day before today.",
                detailsZh: "今天之前的一天。",
                exampleEn: "I went to the grocery store yesterday evening.",
                exampleZh: "我昨天傍晚去了趟杂货店。"
            },
            { 
                english: "One", breakdown: "wun", chinese: "一", pinyin: "yī", emoji: "1️⃣",
                detailsEn: "The number 1.",
                detailsZh: "数字 1。",
                exampleEn: "I only need one ticket for the movie.",
                exampleZh: "我只需要一张电影票。"
            },
            { 
                english: "Two", breakdown: "too", chinese: "二 / 两", pinyin: "èr / liǎng", emoji: "2️⃣",
                detailsEn: "The number 2. In Chinese, '两' is used when counting objects, while '二' is used in math.",
                detailsZh: "数字 2。在英语中没有量词区别。",
                exampleEn: "Can I get two cups of tea, please?",
                exampleZh: "能给我来两杯茶吗？"
            },
            { 
                english: "Three", breakdown: "three", chinese: "三", pinyin: "sān", emoji: "3️⃣",
                detailsEn: "The number 3.",
                detailsZh: "数字 3。",
                exampleEn: "We will meet at the restaurant at three o'clock.",
                exampleZh: "我们三点钟在餐厅见面。"
            },
            { 
                english: "Now", breakdown: "now", chinese: "现在", pinyin: "xiàn zài", emoji: "⏳",
                detailsEn: "The present moment.",
                detailsZh: "当前的时刻。",
                exampleEn: "We need to leave the house right now.",
                exampleZh: "我们现在必须离开家。"
            }
        ]
    },
    {
        id: "level-3",
        title: "Level 3: Food & Dining",
        description: "Vocabulary for eating out.",
        items: [
            { 
                english: "Water", breakdown: "wah-ter", chinese: "水", pinyin: "shuǐ", emoji: "💧",
                detailsEn: "The most essential clear liquid for drinking.",
                detailsZh: "最基本的饮用透明液体。",
                exampleEn: "Can I please get a glass of cold water?",
                exampleZh: "能给我来一杯冷水吗？"
            },
            { 
                english: "Delicious", breakdown: "dih-lish-us", chinese: "好吃", pinyin: "hǎo chī", emoji: "🤤",
                detailsEn: "Used to describe food that tastes very good.",
                detailsZh: "用来形容食物味道很好。",
                exampleEn: "This meal is incredibly delicious, you must try it!",
                exampleZh: "这顿饭太好吃了，你一定要尝尝！"
            },
            { 
                english: "Menu", breakdown: "men-yoo", chinese: "菜单", pinyin: "cài dān", emoji: "📖",
                detailsEn: "A list of food items available in a restaurant.",
                detailsZh: "餐厅里提供的食物清单。",
                exampleEn: "Excuse me, could we please see the dessert menu?",
                exampleZh: "打扰一下，能让我们看看甜点菜单吗？"
            },
            { 
                english: "Rice", breakdown: "rys", chinese: "米饭", pinyin: "mǐ fàn", emoji: "🍚",
                detailsEn: "A staple food grain in many Asian countries.",
                detailsZh: "许多亚洲国家的主食谷物。",
                exampleEn: "I would like a bowl of steamed white rice.",
                exampleZh: "我想要一碗蒸白米饭。"
            },
            { 
                english: "Meat", breakdown: "meet", chinese: "肉", pinyin: "ròu", emoji: "🥩",
                detailsEn: "The flesh of an animal used as food.",
                detailsZh: "用作食物的动物的肉。",
                exampleEn: "He doesn't eat meat because he is a vegetarian.",
                exampleZh: "他不吃肉因为他是个素食主义者。"
            },
            { 
                english: "Vegetable", breakdown: "vej-tuh-buhl", chinese: "蔬菜", pinyin: "shū cài", emoji: "🥬",
                detailsEn: "A plant or part of a plant used as food.",
                detailsZh: "用作食物的植物或植物的一部分。",
                exampleEn: "You need to eat more green vegetables to be healthy.",
                exampleZh: "你需要多吃绿色蔬菜才能保持健康。"
            },
            { 
                english: "Check, please", breakdown: "chek, pleez", chinese: "买单", pinyin: "mǎi dān", emoji: "🧾",
                detailsEn: "The phrase used to ask the waiter for the bill at a restaurant.",
                detailsZh: "在餐厅要求服务员结账时使用的短语。",
                exampleEn: "We are finished eating. Check, please!",
                exampleZh: "我们吃完了。买单！"
            },
            { 
                english: "Spicy", breakdown: "spy-see", chinese: "辣", pinyin: "là", emoji: "🌶️",
                detailsEn: "Used to describe food with a strong, hot flavor like chili.",
                detailsZh: "用来形容像辣椒一样有强烈刺激味道的食物。",
                exampleEn: "This soup is too spicy for me to eat.",
                exampleZh: "这汤对我来说太辣了吃不下。"
            }
        ]
    },
    {
        id: "level-4",
        title: "Level 4: Useful Phrases",
        description: "Putting words together into sentences.",
        items: [
            { 
                english: "How are you?", breakdown: "how ahr yoo", chinese: "你好吗？", pinyin: "nǐ hǎo ma", emoji: "❓",
                detailsEn: "A common polite question asking about someone's well-being.",
                detailsZh: "询问他人近况的常见礼貌用语。",
                exampleEn: "Hi John, how are you doing today?",
                exampleZh: "嗨约翰，你今天好吗？"
            },
            { 
                english: "I don't understand", breakdown: "eye dohnt un-der-stand", chinese: "我不明白", pinyin: "wǒ bù míng bái", emoji: "😕",
                detailsEn: "A crucial phrase when learning a language, used when you are confused.",
                detailsZh: "学习语言时非常关键的句子，当你不清楚对方意思时使用。",
                exampleEn: "I'm sorry, you are speaking too fast and I don't understand.",
                exampleZh: "对不起，你说得太快了，我不明白。"
            },
            { 
                english: "Where is the bathroom?", breakdown: "hwair iz the bath-room", chinese: "洗手间在哪里？", pinyin: "xǐ shǒu jiān zài nǎ lǐ", emoji: "🚻",
                detailsEn: "A very important question when traveling or in public places.",
                detailsZh: "旅行或在公共场所时非常重要的问题。",
                exampleEn: "Excuse me, could you point me to where the bathroom is?",
                exampleZh: "打扰一下，您能指给我洗手间在哪里吗？"
            },
            { 
                english: "What is your name?", breakdown: "hwut iz yoor naym", chinese: "你叫什么名字？", pinyin: "nǐ jiào shén me míng zì", emoji: "📛",
                detailsEn: "The standard question to ask for someone's identity.",
                detailsZh: "询问他人身份的标准问题。",
                exampleEn: "Hello, it is nice to meet you. What is your name?",
                exampleZh: "你好，很高兴认识你。你叫什么名字？"
            },
            { 
                english: "My name is...", breakdown: "my naym iz", chinese: "我的名字是...", pinyin: "wǒ de míng zì shì...", emoji: "🗣️",
                detailsEn: "Used to introduce yourself to others.",
                detailsZh: "用于向他人介绍自己的名字。",
                exampleEn: "My name is David, and I am from Canada.",
                exampleZh: "我的名字是来自加拿大的大卫。"
            },
            { 
                english: "Can you speak slowly?", breakdown: "kan yoo speek sloh-lee", chinese: "你能说慢一点吗？", pinyin: "nǐ néng shuō màn yī diǎn ma", emoji: "🐢",
                detailsEn: "Used when the speaker is talking too fast for you to follow.",
                detailsZh: "当对方语速太快你跟不上时使用。",
                exampleEn: "My English is not very good, can you speak slowly?",
                exampleZh: "我的英语不太好，你能说慢一点吗？"
            },
            { 
                english: "Nice to meet you", breakdown: "nys too meet yoo", chinese: "很高兴认识你", pinyin: "hěn gāo xìng rèn shí nǐ", emoji: "🤝",
                detailsEn: "A polite phrase used after being introduced to someone new.",
                detailsZh: "在初次认识某人后使用的礼貌用语。",
                exampleEn: "It is very nice to meet you, welcome to our team.",
                exampleZh: "很高兴认识你，欢迎来到我们的团队。"
            },
            { 
                english: "How much is this?", breakdown: "how much iz this", chinese: "这个多少钱？", pinyin: "zhè ge duō shǎo qián", emoji: "💰",
                detailsEn: "The essential phrase for shopping and asking for prices.",
                detailsZh: "购物和询问价格时的基本用语。",
                exampleEn: "I want to buy this shirt. How much is this?",
                exampleZh: "我想买这件衬衫。这个多少钱？"
            }
        ]
    },
    {
        id: "level-5",
        title: "Level 5: Daily Life",
        description: "Commonly used words in everyday life.",
        items: [
            { 
                english: "Work", breakdown: "wurk", chinese: "工作", pinyin: "gōng zuò", emoji: "💼",
                detailsEn: "Activity involving mental or physical effort done to achieve a purpose or result.",
                detailsZh: "为了达到某种目的或结果而进行的需要脑力或体力努力的活动。",
                exampleEn: "I have a lot of work to finish before the weekend.",
                exampleZh: "在周末之前我有很多工作要完成。"
            },
            { 
                english: "Sleep", breakdown: "sleep", chinese: "睡觉", pinyin: "shuì jiào", emoji: "🛌",
                detailsEn: "A condition of body and mind that typically recurs for several hours every night.",
                detailsZh: "身心的一种状态，通常每晚都会重复出现几个小时。",
                exampleEn: "I am very tired and I need to get some sleep.",
                exampleZh: "我非常累，我需要睡一会儿。"
            },
            { 
                english: "Phone", breakdown: "fohn", chinese: "手机", pinyin: "shǒu jī", emoji: "📱",
                detailsEn: "A portable electronic device used for communication.",
                detailsZh: "用于通信的便携式电子设备。",
                exampleEn: "I lost my phone and I cannot call my friends.",
                exampleZh: "我弄丢了手机，无法给朋友打电话。"
            },
            { 
                english: "Money", breakdown: "mun-ee", chinese: "钱", pinyin: "qián", emoji: "💵",
                detailsEn: "A current medium of exchange in the form of coins and banknotes.",
                detailsZh: "以硬币和纸币形式存在的当前交换媒介。",
                exampleEn: "Do you have enough money to buy the tickets?",
                exampleZh: "你有足够的钱买票吗？"
            },
            { 
                english: "Home", breakdown: "hohm", chinese: "家", pinyin: "jiā", emoji: "🏠",
                detailsEn: "The place where one lives permanently, especially as a member of a family or household.",
                detailsZh: "一个人永久居住的地方，特别是作为家庭或住户成员。",
                exampleEn: "After a long day of traveling, it feels great to be home.",
                exampleZh: "经过漫长的一天旅行后，回到家感觉真好。"
            },
            { 
                english: "Friend", breakdown: "frend", chinese: "朋友", pinyin: "péng yǒu", emoji: "👫",
                detailsEn: "A person whom one knows and with whom one has a bond of mutual affection.",
                detailsZh: "认识并与之有深厚感情联系的人。",
                exampleEn: "She is my best friend from high school.",
                exampleZh: "她是我高中时最好的朋友。"
            },
            { 
                english: "School", breakdown: "skool", chinese: "学校", pinyin: "xué xiào", emoji: "🏫",
                detailsEn: "An institution for educating children or students.",
                detailsZh: "教育儿童或学生的机构。",
                exampleEn: "The children take the bus to school every morning.",
                exampleZh: "孩子们每天早上坐公交车去学校。"
            },
            { 
                english: "Car", breakdown: "kar", chinese: "汽车", pinyin: "qì chē", emoji: "🚗",
                detailsEn: "A four-wheeled road vehicle that is powered by an engine.",
                detailsZh: "由发动机驱动的四轮公路车辆。",
                exampleEn: "I parked my car in the garage across the street.",
                exampleZh: "我把汽车停在街对面的车库里了。"
            }
        ]
    }
];

const dialogues = [
    {
        id: "dialogue-1",
        title: "Ordering at a Restaurant",
        description: "A conversation between a waiter and a customer.",
        emoji: "🍽️",
        lines: [
            { speaker: "Waiter", english: "Hello! What would you like to eat today?", chinese: "你好！今天想吃点什么？", pinyin: "nǐ hǎo! jīn tiān xiǎng chī diǎn shén me?" },
            { speaker: "Customer", english: "I would like a bowl of beef noodles, please.", chinese: "我想要一碗牛肉面，谢谢。", pinyin: "wǒ xiǎng yào yī wǎn niú ròu miàn, xiè xiè." },
            { speaker: "Waiter", english: "Do you want it spicy?", chinese: "您要辣的吗？", pinyin: "nín yào là de ma?" },
            { speaker: "Customer", english: "No, not spicy. And a glass of water, please.", chinese: "不要辣的。再来一杯水，谢谢。", pinyin: "bù yào là de. zài lái yī bēi shuǐ, xiè xiè." },
            { speaker: "Waiter", english: "Okay, coming right up!", chinese: "好的，马上来！", pinyin: "hǎo de, mǎ shàng lái!" }
        ]
    },
    {
        id: "dialogue-2",
        title: "Meeting a New Friend",
        description: "Introducing yourself to someone new.",
        emoji: "🤝",
        lines: [
            { speaker: "Person A", english: "Hello, my name is Sarah. What is your name?", chinese: "你好，我叫莎拉。你叫什么名字？", pinyin: "nǐ hǎo, wǒ jiào shā lā. nǐ jiào shén me míng zì?" },
            { speaker: "Person B", english: "Hi Sarah, my name is Li Ming. Nice to meet you.", chinese: "嗨莎拉，我叫李明。很高兴认识你。", pinyin: "hāi shā lā, wǒ jiào lǐ míng. hěn gāo xìng rèn shí nǐ." },
            { speaker: "Person A", english: "Nice to meet you too! Where are you from?", chinese: "我也很高兴认识你！你来自哪里？", pinyin: "wǒ yě hěn gāo xìng rèn shí nǐ! nǐ lái zì nǎ lǐ?" },
            { speaker: "Person B", english: "I am from China. How about you?", chinese: "我来自中国。你呢？", pinyin: "wǒ lái zì zhōng guó. nǐ ne?" },
            { speaker: "Person A", english: "I am from Canada.", chinese: "我来自加拿大。", pinyin: "wǒ lái zì jiā ná dà." }
        ]
    },
    {
        id: "dialogue-3",
        title: "Shopping for Clothes",
        description: "Asking for prices and trying on clothes.",
        emoji: "👕",
        lines: [
            { speaker: "Customer", english: "Excuse me, how much is this shirt?", chinese: "打扰一下，这件衬衫多少钱？", pinyin: "dǎ rǎo yī xià, zhè jiàn chèn shān duō shǎo qián?" },
            { speaker: "Shop Assistant", english: "This shirt is 50 dollars.", chinese: "这件衬衫五十块钱。", pinyin: "zhè jiàn chèn shān wǔ shí kuài qián." },
            { speaker: "Customer", english: "Can I try it on?", chinese: "我可以试穿一下吗？", pinyin: "wǒ kě yǐ shì chuān yī xià ma?" },
            { speaker: "Shop Assistant", english: "Yes, the fitting room is over there.", chinese: "可以，试衣间在那边。", pinyin: "kě yǐ, shì yī jiān zài nà biān." },
            { speaker: "Customer", english: "Thank you!", chinese: "谢谢！", pinyin: "xiè xiè!" }
        ]
    }
];
