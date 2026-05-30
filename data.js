// LMC Chinese - Data File
// 100 vocabulário + 60 frases + 20 diálogos

const vocabularyData = [
  // 1. Cafeteria/Restaurante
  { id: 1, chinese: "咖啡", pinyin: "kāfēi", portuguese: "café", example_cn: "我要一杯咖啡。", example_pinyin: "Wǒ yào yī bēi kāfēi.", example_pt: "Eu quero um café.", category: "Cafeteria/Restaurante" },
  { id: 2, chinese: "菜单", pinyin: "càidān", portuguese: "cardápio", example_cn: "请给我菜单。", example_pinyin: "Qǐng gěi wǒ càidān.", example_pt: "Por favor, me dê o cardápio.", category: "Cafeteria/Restaurante" },
  { id: 3, chinese: "好吃", pinyin: "hǎochī", portuguese: "delicioso", example_cn: "这个菜很好吃。", example_pinyin: "Zhège cài hěn hǎochī.", example_pt: "Este prato é delicioso.", category: "Cafeteria/Restaurante" },
  { id: 4, chinese: "买单", pinyin: "mǎidān", portuguese: "pedir a conta", example_cn: "服务员，买单！", example_pinyin: "Fúwùyuán, mǎidān!", example_pt: "Garçom, a conta!", category: "Cafeteria/Restaurante" },
  { id: 5, chinese: "米饭", pinyin: "mǐfàn", portuguese: "arroz", example_cn: "我要一碗米饭。", example_pinyin: "Wǒ yào yī wǎn mǐfàn.", example_pt: "Eu quero uma tigela de arroz.", category: "Cafeteria/Restaurante" },
  // 2. Supermercado
  { id: 6, chinese: "超市", pinyin: "chāoshì", portuguese: "supermercado", example_cn: "我去超市买东西。", example_pinyin: "Wǒ qù chāoshì mǎi dōngxi.", example_pt: "Vou ao supermercado comprar coisas.", category: "Supermercado" },
  { id: 7, chinese: "水果", pinyin: "shuǐguǒ", portuguese: "fruta", example_cn: "这些水果很新鲜。", example_pinyin: "Zhèxiē shuǐguǒ hěn xīnxiān.", example_pt: "Essas frutas são frescas.", category: "Supermercado" },
  { id: 8, chinese: "便宜", pinyin: "piányi", portuguese: "barato", example_cn: "这个很便宜。", example_pinyin: "Zhège hěn piányi.", example_pt: "Isso é barato.", category: "Supermercado" },
  { id: 9, chinese: "贵", pinyin: "guì", portuguese: "caro", example_cn: "太贵了！", example_pinyin: "Tài guì le!", example_pt: "Muito caro!", category: "Supermercado" },
  { id: 10, chinese: "袋子", pinyin: "dàizi", portuguese: "sacola", example_cn: "需要袋子吗？", example_pinyin: "Xūyào dàizi ma?", example_pt: "Precisa de sacola?", category: "Supermercado" },
  // 3. Transporte
  { id: 11, chinese: "出租车", pinyin: "chūzūchē", portuguese: "táxi", example_cn: "我要打出租车。", example_pinyin: "Wǒ yào dǎ chūzūchē.", example_pt: "Eu quero pegar um táxi.", category: "Transporte" },
  { id: 12, chinese: "地铁", pinyin: "dìtiě", portuguese: "metrô", example_cn: "地铁站在哪里？", example_pinyin: "Dìtiě zhàn zài nǎlǐ?", example_pt: "Onde fica a estação de metrô?", category: "Transporte" },
  { id: 13, chinese: "公交车", pinyin: "gōngjiāochē", portuguese: "ônibus", example_cn: "这辆公交车去哪里？", example_pinyin: "Zhè liàng gōngjiāochē qù nǎlǐ?", example_pt: "Para onde vai este ônibus?", category: "Transporte" },
  { id: 14, chinese: "司机", pinyin: "sījī", portuguese: "motorista", example_cn: "司机，请开快一点。", example_pinyin: "Sījī, qǐng kāi kuài yīdiǎn.", example_pt: "Motorista, por favor vá mais rápido.", category: "Transporte" },
  { id: 15, chinese: "到了", pinyin: "dào le", portuguese: "chegou", example_cn: "我们到了。", example_pinyin: "Wǒmen dào le.", example_pt: "Nós chegamos.", category: "Transporte" },
  // 4. Pedir direções
  { id: 16, chinese: "左边", pinyin: "zuǒbiān", portuguese: "esquerda", example_cn: "在左边。", example_pinyin: "Zài zuǒbiān.", example_pt: "Fica à esquerda.", category: "Pedir direções" },
  { id: 17, chinese: "右边", pinyin: "yòubiān", portuguese: "direita", example_cn: "往右边走。", example_pinyin: "Wǎng yòubiān zǒu.", example_pt: "Vá para a direita.", category: "Pedir direções" },
  { id: 18, chinese: "直走", pinyin: "zhí zǒu", portuguese: "siga em frente", example_cn: "一直直走。", example_pinyin: "Yīzhí zhí zǒu.", example_pt: "Siga sempre em frente.", category: "Pedir direções" },
  { id: 19, chinese: "远", pinyin: "yuǎn", portuguese: "longe", example_cn: "很远吗？", example_pinyin: "Hěn yuǎn ma?", example_pt: "É longe?", category: "Pedir direções" },
  { id: 20, chinese: "近", pinyin: "jìn", portuguese: "perto", example_cn: "很近，走路五分钟。", example_pinyin: "Hěn jìn, zǒulù wǔ fēnzhōng.", example_pt: "É perto, cinco minutos a pé.", category: "Pedir direções" },
  // 5. Hospital
  { id: 21, chinese: "医院", pinyin: "yīyuàn", portuguese: "hospital", example_cn: "我要去医院。", example_pinyin: "Wǒ yào qù yīyuàn.", example_pt: "Eu preciso ir ao hospital.", category: "Hospital" },
  { id: 22, chinese: "医生", pinyin: "yīshēng", portuguese: "médico", example_cn: "医生说没问题。", example_pinyin: "Yīshēng shuō méi wèntí.", example_pt: "O médico disse que não tem problema.", category: "Hospital" },
  { id: 23, chinese: "头疼", pinyin: "tóu téng", portuguese: "dor de cabeça", example_cn: "我头疼。", example_pinyin: "Wǒ tóu téng.", example_pt: "Estou com dor de cabeça.", category: "Hospital" },
  { id: 24, chinese: "药", pinyin: "yào", portuguese: "remédio", example_cn: "你吃药了吗？", example_pinyin: "Nǐ chī yào le ma?", example_pt: "Você tomou o remédio?", category: "Hospital" },
  { id: 25, chinese: "发烧", pinyin: "fāshāo", portuguese: "febre", example_cn: "我发烧了。", example_pinyin: "Wǒ fāshāo le.", example_pt: "Estou com febre.", category: "Hospital" },
  // 6. Banco
  { id: 26, chinese: "银行", pinyin: "yínháng", portuguese: "banco", example_cn: "银行几点开门？", example_pinyin: "Yínháng jǐ diǎn kāimén?", example_pt: "A que horas o banco abre?", category: "Banco" },
  { id: 27, chinese: "钱", pinyin: "qián", portuguese: "dinheiro", example_cn: "我没有钱了。", example_pinyin: "Wǒ méiyǒu qián le.", example_pt: "Eu não tenho mais dinheiro.", category: "Banco" },
  { id: 28, chinese: "取钱", pinyin: "qǔ qián", portuguese: "sacar dinheiro", example_cn: "我要取钱。", example_pinyin: "Wǒ yào qǔ qián.", example_pt: "Eu quero sacar dinheiro.", category: "Banco" },
  { id: 29, chinese: "转账", pinyin: "zhuǎnzhàng", portuguese: "transferência", example_cn: "我给你转账。", example_pinyin: "Wǒ gěi nǐ zhuǎnzhàng.", example_pt: "Vou te fazer uma transferência.", category: "Banco" },
  { id: 30, chinese: "密码", pinyin: "mìmǎ", portuguese: "senha", example_cn: "请输入密码。", example_pinyin: "Qǐng shūrù mìmǎ.", example_pt: "Por favor, digite a senha.", category: "Banco" },
  // 7. Aluguel
  { id: 31, chinese: "房子", pinyin: "fángzi", portuguese: "casa", example_cn: "这个房子很大。", example_pinyin: "Zhège fángzi hěn dà.", example_pt: "Esta casa é grande.", category: "Aluguel" },
  { id: 32, chinese: "房租", pinyin: "fángzū", portuguese: "aluguel", example_cn: "房租多少钱？", example_pinyin: "Fángzū duōshao qián?", example_pt: "Quanto é o aluguel?", category: "Aluguel" },
  { id: 33, chinese: "卧室", pinyin: "wòshì", portuguese: "quarto", example_cn: "有两个卧室。", example_pinyin: "Yǒu liǎng gè wòshì.", example_pt: "Tem dois quartos.", category: "Aluguel" },
  { id: 34, chinese: "合同", pinyin: "hétong", portuguese: "contrato", example_cn: "我们签合同吧。", example_pinyin: "Wǒmen qiān hétong ba.", example_pt: "Vamos assinar o contrato.", category: "Aluguel" },
  { id: 35, chinese: "押金", pinyin: "yājīn", portuguese: "caução/depósito", example_cn: "押金是一个月房租。", example_pinyin: "Yājīn shì yī gè yuè fángzū.", example_pt: "O depósito é um mês de aluguel.", category: "Aluguel" },
  // 8. Entrevista/Trabalho
  { id: 36, chinese: "工作", pinyin: "gōngzuò", portuguese: "trabalho", example_cn: "你在哪里工作？", example_pinyin: "Nǐ zài nǎlǐ gōngzuò?", example_pt: "Onde você trabalha?", category: "Entrevista/Trabalho" },
  { id: 37, chinese: "面试", pinyin: "miànshì", portuguese: "entrevista", example_cn: "明天有面试。", example_pinyin: "Míngtiān yǒu miànshì.", example_pt: "Amanhã tem entrevista.", category: "Entrevista/Trabalho" },
  { id: 38, chinese: "工资", pinyin: "gōngzī", portuguese: "salário", example_cn: "工资多少？", example_pinyin: "Gōngzī duōshao?", example_pt: "Qual é o salário?", category: "Entrevista/Trabalho" },
  { id: 39, chinese: "经验", pinyin: "jīngyàn", portuguese: "experiência", example_cn: "你有经验吗？", example_pinyin: "Nǐ yǒu jīngyàn ma?", example_pt: "Você tem experiência?", category: "Entrevista/Trabalho" },
  { id: 40, chinese: "同事", pinyin: "tóngshì", portuguese: "colega", example_cn: "他是我的同事。", example_pinyin: "Tā shì wǒ de tóngshì.", example_pt: "Ele é meu colega.", category: "Entrevista/Trabalho" },
  // 9. Telefone
  { id: 41, chinese: "电话", pinyin: "diànhuà", portuguese: "telefone", example_cn: "你的电话号码是多少？", example_pinyin: "Nǐ de diànhuà hàomǎ shì duōshao?", example_pt: "Qual é o seu número de telefone?", category: "Telefone" },
  { id: 42, chinese: "打电话", pinyin: "dǎ diànhuà", portuguese: "ligar (telefonar)", example_cn: "我给你打电话。", example_pinyin: "Wǒ gěi nǐ dǎ diànhuà.", example_pt: "Vou te ligar.", category: "Telefone" },
  { id: 43, chinese: "接电话", pinyin: "jiē diànhuà", portuguese: "atender o telefone", example_cn: "请接电话。", example_pinyin: "Qǐng jiē diànhuà.", example_pt: "Por favor, atenda o telefone.", category: "Telefone" },
  { id: 44, chinese: "忙", pinyin: "máng", portuguese: "ocupado", example_cn: "我现在很忙。", example_pinyin: "Wǒ xiànzài hěn máng.", example_pt: "Estou ocupado agora.", category: "Telefone" },
  { id: 45, chinese: "稍等", pinyin: "shāo děng", portuguese: "espere um momento", example_cn: "请稍等一下。", example_pinyin: "Qǐng shāo děng yīxià.", example_pt: "Por favor, espere um momento.", category: "Telefone" },
  // 10. Shopping
  { id: 46, chinese: "商场", pinyin: "shāngchǎng", portuguese: "shopping center", example_cn: "我们去商场吧。", example_pinyin: "Wǒmen qù shāngchǎng ba.", example_pt: "Vamos ao shopping.", category: "Shopping" },
  { id: 47, chinese: "打折", pinyin: "dǎzhé", portuguese: "desconto", example_cn: "今天打折吗？", example_pinyin: "Jīntiān dǎzhé ma?", example_pt: "Tem desconto hoje?", category: "Shopping" },
  { id: 48, chinese: "试穿", pinyin: "shì chuān", portuguese: "experimentar (roupa)", example_cn: "我可以试穿吗？", example_pinyin: "Wǒ kěyǐ shì chuān ma?", example_pt: "Posso experimentar?", category: "Shopping" },
  { id: 49, chinese: "大小", pinyin: "dàxiǎo", portuguese: "tamanho", example_cn: "有大一号的吗？", example_pinyin: "Yǒu dà yī hào de ma?", example_pt: "Tem um número maior?", category: "Shopping" },
  { id: 50, chinese: "颜色", pinyin: "yánsè", portuguese: "cor", example_cn: "有别的颜色吗？", example_pinyin: "Yǒu bié de yánsè ma?", example_pt: "Tem outra cor?", category: "Shopping" },
  // 11. Hotel
  { id: 51, chinese: "酒店", pinyin: "jiǔdiàn", portuguese: "hotel", example_cn: "这个酒店很好。", example_pinyin: "Zhège jiǔdiàn hěn hǎo.", example_pt: "Este hotel é bom.", category: "Hotel" },
  { id: 52, chinese: "预订", pinyin: "yùdìng", portuguese: "reserva", example_cn: "我预订了一个房间。", example_pinyin: "Wǒ yùdìng le yī gè fángjiān.", example_pt: "Eu reservei um quarto.", category: "Hotel" },
  { id: 53, chinese: "退房", pinyin: "tuì fáng", portuguese: "check-out", example_cn: "我要退房。", example_pinyin: "Wǒ yào tuì fáng.", example_pt: "Eu quero fazer check-out.", category: "Hotel" },
  { id: 54, chinese: "钥匙", pinyin: "yàoshi", portuguese: "chave", example_cn: "请给我钥匙。", example_pinyin: "Qǐng gěi wǒ yàoshi.", example_pt: "Por favor, me dê a chave.", category: "Hotel" },
  { id: 55, chinese: "早餐", pinyin: "zǎocān", portuguese: "café da manhã", example_cn: "早餐几点开始？", example_pinyin: "Zǎocān jǐ diǎn kāishǐ?", example_pt: "A que horas começa o café da manhã?", category: "Hotel" },
  // 12. Delivery
  { id: 56, chinese: "外卖", pinyin: "wàimài", portuguese: "delivery (comida)", example_cn: "我们点外卖吧。", example_pinyin: "Wǒmen diǎn wàimài ba.", example_pt: "Vamos pedir delivery.", category: "Delivery" },
  { id: 57, chinese: "快递", pinyin: "kuàidì", portuguese: "entrega/correio", example_cn: "你的快递到了。", example_pinyin: "Nǐ de kuàidì dào le.", example_pt: "Sua encomenda chegou.", category: "Delivery" },
  { id: 58, chinese: "地址", pinyin: "dìzhǐ", portuguese: "endereço", example_cn: "你的地址是什么？", example_pinyin: "Nǐ de dìzhǐ shì shénme?", example_pt: "Qual é o seu endereço?", category: "Delivery" },
  { id: 59, chinese: "签收", pinyin: "qiānshōu", portuguese: "assinar recebimento", example_cn: "请签收一下。", example_pinyin: "Qǐng qiānshōu yīxià.", example_pt: "Por favor, assine o recebimento.", category: "Delivery" },
  { id: 60, chinese: "送到", pinyin: "sòng dào", portuguese: "entregar em", example_cn: "请送到我家。", example_pinyin: "Qǐng sòng dào wǒ jiā.", example_pt: "Por favor, entregue na minha casa.", category: "Delivery" },
  // 13. Barbearia
  { id: 61, chinese: "理发", pinyin: "lǐfà", portuguese: "cortar cabelo", example_cn: "我要理发。", example_pinyin: "Wǒ yào lǐfà.", example_pt: "Eu quero cortar o cabelo.", category: "Barbearia" },
  { id: 62, chinese: "短", pinyin: "duǎn", portuguese: "curto", example_cn: "剪短一点。", example_pinyin: "Jiǎn duǎn yīdiǎn.", example_pt: "Corte um pouco mais curto.", category: "Barbearia" },
  { id: 63, chinese: "长", pinyin: "cháng", portuguese: "longo/comprido", example_cn: "头发太长了。", example_pinyin: "Tóufa tài cháng le.", example_pt: "O cabelo está muito longo.", category: "Barbearia" },
  { id: 64, chinese: "洗头", pinyin: "xǐ tóu", portuguese: "lavar o cabelo", example_cn: "先洗头吧。", example_pinyin: "Xiān xǐ tóu ba.", example_pt: "Vamos lavar o cabelo primeiro.", category: "Barbearia" },
  { id: 65, chinese: "好看", pinyin: "hǎokàn", portuguese: "bonito", example_cn: "这个发型很好看。", example_pinyin: "Zhège fàxíng hěn hǎokàn.", example_pt: "Este penteado é bonito.", category: "Barbearia" },
  // 14. Academia
  { id: 66, chinese: "健身房", pinyin: "jiànshēnfáng", portuguese: "academia", example_cn: "你去健身房吗？", example_pinyin: "Nǐ qù jiànshēnfáng ma?", example_pt: "Você vai à academia?", category: "Academia" },
  { id: 67, chinese: "运动", pinyin: "yùndòng", portuguese: "exercício", example_cn: "多运动对身体好。", example_pinyin: "Duō yùndòng duì shēntǐ hǎo.", example_pt: "Fazer mais exercício é bom para a saúde.", category: "Academia" },
  { id: 68, chinese: "跑步", pinyin: "pǎobù", portuguese: "correr", example_cn: "我每天跑步。", example_pinyin: "Wǒ měitiān pǎobù.", example_pt: "Eu corro todos os dias.", category: "Academia" },
  { id: 69, chinese: "累", pinyin: "lèi", portuguese: "cansado", example_cn: "我很累。", example_pinyin: "Wǒ hěn lèi.", example_pt: "Estou cansado.", category: "Academia" },
  { id: 70, chinese: "休息", pinyin: "xiūxi", portuguese: "descansar", example_cn: "休息一下吧。", example_pinyin: "Xiūxi yīxià ba.", example_pt: "Descanse um pouco.", category: "Academia" },
  // 15. Encontro com amigos
  { id: 71, chinese: "朋友", pinyin: "péngyou", portuguese: "amigo", example_cn: "他是我的好朋友。", example_pinyin: "Tā shì wǒ de hǎo péngyou.", example_pt: "Ele é meu bom amigo.", category: "Encontro com amigos" },
  { id: 72, chinese: "开心", pinyin: "kāixīn", portuguese: "feliz/contente", example_cn: "今天很开心。", example_pinyin: "Jīntiān hěn kāixīn.", example_pt: "Hoje estou muito feliz.", category: "Encontro com amigos" },
  { id: 73, chinese: "聚会", pinyin: "jùhuì", portuguese: "reunião/encontro", example_cn: "周末有聚会。", example_pinyin: "Zhōumò yǒu jùhuì.", example_pt: "Tem um encontro no fim de semana.", category: "Encontro com amigos" },
  { id: 74, chinese: "喝酒", pinyin: "hē jiǔ", portuguese: "beber (álcool)", example_cn: "我们喝酒吧。", example_pinyin: "Wǒmen hē jiǔ ba.", example_pt: "Vamos beber.", category: "Encontro com amigos" },
  { id: 75, chinese: "干杯", pinyin: "gānbēi", portuguese: "saúde!/brinde", example_cn: "干杯！", example_pinyin: "Gānbēi!", example_pt: "Saúde!", category: "Encontro com amigos" },
  // 16. Apresentação pessoal
  { id: 76, chinese: "名字", pinyin: "míngzi", portuguese: "nome", example_cn: "你叫什么名字？", example_pinyin: "Nǐ jiào shénme míngzi?", example_pt: "Qual é o seu nome?", category: "Apresentação pessoal" },
  { id: 77, chinese: "国家", pinyin: "guójiā", portuguese: "país", example_cn: "你是哪个国家的？", example_pinyin: "Nǐ shì nǎge guójiā de?", example_pt: "De que país você é?", category: "Apresentação pessoal" },
  { id: 78, chinese: "年龄", pinyin: "niánlíng", portuguese: "idade", example_cn: "你多大了？", example_pinyin: "Nǐ duō dà le?", example_pt: "Quantos anos você tem?", category: "Apresentação pessoal" },
  { id: 79, chinese: "爱好", pinyin: "àihào", portuguese: "hobby", example_cn: "你的爱好是什么？", example_pinyin: "Nǐ de àihào shì shénme?", example_pt: "Qual é o seu hobby?", category: "Apresentação pessoal" },
  { id: 80, chinese: "认识", pinyin: "rènshi", portuguese: "conhecer", example_cn: "很高兴认识你。", example_pinyin: "Hěn gāoxìng rènshi nǐ.", example_pt: "Prazer em conhecê-lo.", category: "Apresentação pessoal" },
  // 17. Clima
  { id: 81, chinese: "天气", pinyin: "tiānqì", portuguese: "clima/tempo", example_cn: "今天天气怎么样？", example_pinyin: "Jīntiān tiānqì zěnmeyàng?", example_pt: "Como está o tempo hoje?", category: "Clima" },
  { id: 82, chinese: "热", pinyin: "rè", portuguese: "quente", example_cn: "今天很热。", example_pinyin: "Jīntiān hěn rè.", example_pt: "Hoje está quente.", category: "Clima" },
  { id: 83, chinese: "冷", pinyin: "lěng", portuguese: "frio", example_cn: "外面很冷。", example_pinyin: "Wàimiàn hěn lěng.", example_pt: "Está frio lá fora.", category: "Clima" },
  { id: 84, chinese: "下雨", pinyin: "xià yǔ", portuguese: "chover", example_cn: "明天会下雨。", example_pinyin: "Míngtiān huì xià yǔ.", example_pt: "Amanhã vai chover.", category: "Clima" },
  { id: 85, chinese: "伞", pinyin: "sǎn", portuguese: "guarda-chuva", example_cn: "带伞了吗？", example_pinyin: "Dài sǎn le ma?", example_pt: "Trouxe guarda-chuva?", category: "Clima" },
  // 18. Marcar refeição
  { id: 86, chinese: "吃饭", pinyin: "chīfàn", portuguese: "comer/refeição", example_cn: "我们一起吃饭吧。", example_pinyin: "Wǒmen yīqǐ chīfàn ba.", example_pt: "Vamos comer juntos.", category: "Marcar refeição" },
  { id: 87, chinese: "饿", pinyin: "è", portuguese: "com fome", example_cn: "我饿了。", example_pinyin: "Wǒ è le.", example_pt: "Estou com fome.", category: "Marcar refeição" },
  { id: 88, chinese: "时间", pinyin: "shíjiān", portuguese: "horário/tempo", example_cn: "你什么时间有空？", example_pinyin: "Nǐ shénme shíjiān yǒu kòng?", example_pt: "Que horário você está livre?", category: "Marcar refeição" },
  { id: 89, chinese: "等", pinyin: "děng", portuguese: "esperar", example_cn: "等我一下。", example_pinyin: "Děng wǒ yīxià.", example_pt: "Espere um momento.", category: "Marcar refeição" },
  { id: 90, chinese: "好的", pinyin: "hǎo de", portuguese: "ok/tudo bem", example_cn: "好的，没问题。", example_pinyin: "Hǎo de, méi wèntí.", example_pt: "Ok, sem problema.", category: "Marcar refeição" },
  // 19. Reclamação/Troca
  { id: 91, chinese: "退货", pinyin: "tuìhuò", portuguese: "devolver produto", example_cn: "我想退货。", example_pinyin: "Wǒ xiǎng tuìhuò.", example_pt: "Eu quero devolver o produto.", category: "Reclamação/Troca" },
  { id: 92, chinese: "换", pinyin: "huàn", portuguese: "trocar", example_cn: "可以换一个吗？", example_pinyin: "Kěyǐ huàn yī gè ma?", example_pt: "Posso trocar por outro?", category: "Reclamação/Troca" },
  { id: 93, chinese: "坏了", pinyin: "huài le", portuguese: "quebrou/estragou", example_cn: "这个坏了。", example_pinyin: "Zhège huài le.", example_pt: "Isso está estragado.", category: "Reclamação/Troca" },
  { id: 94, chinese: "发票", pinyin: "fāpiào", portuguese: "nota fiscal", example_cn: "请给我发票。", example_pinyin: "Qǐng gěi wǒ fāpiào.", example_pt: "Por favor, me dê a nota fiscal.", category: "Reclamação/Troca" },
  { id: 95, chinese: "经理", pinyin: "jīnglǐ", portuguese: "gerente", example_cn: "请叫经理来。", example_pinyin: "Qǐng jiào jīnglǐ lái.", example_pt: "Por favor, chame o gerente.", category: "Reclamação/Troca" },
  // 20. Emergência
  { id: 96, chinese: "救命", pinyin: "jiùmìng", portuguese: "socorro!", example_cn: "救命！快来人！", example_pinyin: "Jiùmìng! Kuài lái rén!", example_pt: "Socorro! Venha alguém!", category: "Emergência" },
  { id: 97, chinese: "警察", pinyin: "jǐngchá", portuguese: "polícia", example_cn: "请叫警察。", example_pinyin: "Qǐng jiào jǐngchá.", example_pt: "Por favor, chame a polícia.", category: "Emergência" },
  { id: 98, chinese: "危险", pinyin: "wéixiǎn", portuguese: "perigo", example_cn: "这里很危险。", example_pinyin: "Zhèlǐ hěn wéixiǎn.", example_pt: "Aqui é perigoso.", category: "Emergência" },
  { id: 99, chinese: "帮忙", pinyin: "bāngmáng", portuguese: "ajudar", example_cn: "请帮帮忙。", example_pinyin: "Qǐng bāng bāngmáng.", example_pt: "Por favor, me ajude.", category: "Emergência" },
  { id: 100, chinese: "火", pinyin: "huǒ", portuguese: "fogo", example_cn: "着火了！", example_pinyin: "Zháohuǒ le!", example_pt: "Pegou fogo!", category: "Emergência" }
];

const sentencesData = [
  // 1. Cafeteria/Restaurante
  { id: 1, chinese: "请问有位子吗？", pinyin: "Qǐngwèn yǒu wèizi ma?", portuguese: "Com licença, tem mesa disponível?", category: "Cafeteria/Restaurante" },
  { id: 2, chinese: "我要点菜。", pinyin: "Wǒ yào diǎn cài.", portuguese: "Eu quero fazer o pedido.", category: "Cafeteria/Restaurante" },
  { id: 3, chinese: "可以用微信支付吗？", pinyin: "Kěyǐ yòng Wēixìn zhīfù ma?", portuguese: "Posso pagar com WeChat Pay?", category: "Cafeteria/Restaurante" },
  // 2. Supermercado
  { id: 4, chinese: "这个多少钱？", pinyin: "Zhège duōshao qián?", portuguese: "Quanto custa isso?", category: "Supermercado" },
  { id: 5, chinese: "有更大的吗？", pinyin: "Yǒu gèng dà de ma?", portuguese: "Tem um maior?", category: "Supermercado" },
  { id: 6, chinese: "我要结账。", pinyin: "Wǒ yào jiézhàng.", portuguese: "Eu quero pagar.", category: "Supermercado" },
  // 3. Transporte
  { id: 7, chinese: "请问去火车站怎么走？", pinyin: "Qǐngwèn qù huǒchēzhàn zěnme zǒu?", portuguese: "Com licença, como chego à estação de trem?", category: "Transporte" },
  { id: 8, chinese: "请在这里停车。", pinyin: "Qǐng zài zhèlǐ tíng chē.", portuguese: "Por favor, pare aqui.", category: "Transporte" },
  { id: 9, chinese: "到机场要多长时间？", pinyin: "Dào jīchǎng yào duō cháng shíjiān?", portuguese: "Quanto tempo leva até o aeroporto?", category: "Transporte" },
  // 4. Pedir direções
  { id: 10, chinese: "请问厕所在哪里？", pinyin: "Qǐngwèn cèsuǒ zài nǎlǐ?", portuguese: "Com licença, onde fica o banheiro?", category: "Pedir direções" },
  { id: 11, chinese: "离这里远吗？", pinyin: "Lí zhèlǐ yuǎn ma?", portuguese: "É longe daqui?", category: "Pedir direções" },
  { id: 12, chinese: "我迷路了。", pinyin: "Wǒ mílù le.", portuguese: "Estou perdido.", category: "Pedir direções" },
  // 5. Hospital
  { id: 13, chinese: "我不舒服。", pinyin: "Wǒ bù shūfu.", portuguese: "Não estou me sentindo bem.", category: "Hospital" },
  { id: 14, chinese: "我对这个药过敏。", pinyin: "Wǒ duì zhège yào guòmǐn.", portuguese: "Sou alérgico a este remédio.", category: "Hospital" },
  { id: 15, chinese: "需要做检查吗？", pinyin: "Xūyào zuò jiǎnchá ma?", portuguese: "Preciso fazer exames?", category: "Hospital" },
  // 6. Banco
  { id: 16, chinese: "我想开一个账户。", pinyin: "Wǒ xiǎng kāi yī gè zhànghù.", portuguese: "Eu quero abrir uma conta.", category: "Banco" },
  { id: 17, chinese: "汇率是多少？", pinyin: "Huìlǜ shì duōshao?", portuguese: "Qual é a taxa de câmbio?", category: "Banco" },
  { id: 18, chinese: "ATM在哪里？", pinyin: "ATM zài nǎlǐ?", portuguese: "Onde fica o caixa eletrônico?", category: "Banco" },
  // 7. Aluguel
  { id: 19, chinese: "可以看一下房子吗？", pinyin: "Kěyǐ kàn yīxià fángzi ma?", portuguese: "Posso ver a casa?", category: "Aluguel" },
  { id: 20, chinese: "包水电费吗？", pinyin: "Bāo shuǐ diànfèi ma?", portuguese: "Inclui água e luz?", category: "Aluguel" },
  { id: 21, chinese: "可以养宠物吗？", pinyin: "Kěyǐ yǎng chǒngwù ma?", portuguese: "Posso ter animais de estimação?", category: "Aluguel" },
  // 8. Entrevista/Trabalho
  { id: 22, chinese: "我对这个岗位很感兴趣。", pinyin: "Wǒ duì zhège gǎngwèi hěn gǎn xìngqù.", portuguese: "Estou muito interessado nesta vaga.", category: "Entrevista/Trabalho" },
  { id: 23, chinese: "什么时候可以开始上班？", pinyin: "Shénme shíhou kěyǐ kāishǐ shàngbān?", portuguese: "Quando posso começar a trabalhar?", category: "Entrevista/Trabalho" },
  { id: 24, chinese: "有五险一金吗？", pinyin: "Yǒu wǔ xiǎn yī jīn ma?", portuguese: "Tem seguro social e fundo de previdência?", category: "Entrevista/Trabalho" },
  // 9. Telefone
  { id: 25, chinese: "喂，你好，请问是哪位？", pinyin: "Wèi, nǐ hǎo, qǐngwèn shì nǎ wèi?", portuguese: "Alô, quem está falando?", category: "Telefone" },
  { id: 26, chinese: "信号不好，听不清楚。", pinyin: "Xìnhào bù hǎo, tīng bù qīngchu.", portuguese: "O sinal está ruim, não consigo ouvir bem.", category: "Telefone" },
  { id: 27, chinese: "我等一下再打给你。", pinyin: "Wǒ děng yīxià zài dǎ gěi nǐ.", portuguese: "Eu te ligo de volta depois.", category: "Telefone" },
  // 10. Shopping
  { id: 28, chinese: "这件衣服多少钱？", pinyin: "Zhè jiàn yīfu duōshao qián?", portuguese: "Quanto custa esta roupa?", category: "Shopping" },
  { id: 29, chinese: "能便宜一点吗？", pinyin: "Néng piányi yīdiǎn ma?", portuguese: "Pode ser mais barato?", category: "Shopping" },
  { id: 30, chinese: "我只是看看。", pinyin: "Wǒ zhǐ shì kànkan.", portuguese: "Estou só olhando.", category: "Shopping" },
  // 11. Hotel
  { id: 31, chinese: "我预订了一个标准间。", pinyin: "Wǒ yùdìng le yī gè biāozhǔn jiān.", portuguese: "Eu reservei um quarto standard.", category: "Hotel" },
  { id: 32, chinese: "有Wi-Fi吗？密码是多少？", pinyin: "Yǒu Wi-Fi ma? Mìmǎ shì duōshao?", portuguese: "Tem Wi-Fi? Qual é a senha?", category: "Hotel" },
  { id: 33, chinese: "请帮我叫一辆出租车。", pinyin: "Qǐng bāng wǒ jiào yī liàng chūzūchē.", portuguese: "Por favor, chame um táxi para mim.", category: "Hotel" },
  // 12. Delivery
  { id: 34, chinese: "大概多久能送到？", pinyin: "Dàgài duōjiǔ néng sòng dào?", portuguese: "Mais ou menos quanto tempo para entregar?", category: "Delivery" },
  { id: 35, chinese: "我的快递到哪了？", pinyin: "Wǒ de kuàidì dào nǎ le?", portuguese: "Onde está minha encomenda?", category: "Delivery" },
  { id: 36, chinese: "放在门口就行。", pinyin: "Fàng zài ménkǒu jiù xíng.", portuguese: "Deixe na porta, por favor.", category: "Delivery" },
  // 13. Barbearia
  { id: 37, chinese: "两边剪短，上面留长。", pinyin: "Liǎng biān jiǎn duǎn, shàngmiàn liú cháng.", portuguese: "Curto nas laterais, comprido em cima.", category: "Barbearia" },
  { id: 38, chinese: "不要剪太短。", pinyin: "Bùyào jiǎn tài duǎn.", portuguese: "Não corte muito curto.", category: "Barbearia" },
  { id: 39, chinese: "需要等多久？", pinyin: "Xūyào děng duōjiǔ?", portuguese: "Preciso esperar quanto tempo?", category: "Barbearia" },
  // 14. Academia
  { id: 40, chinese: "办一张会员卡多少钱？", pinyin: "Bàn yī zhāng huìyuán kǎ duōshao qián?", portuguese: "Quanto custa um cartão de membro?", category: "Academia" },
  { id: 41, chinese: "请问有私人教练吗？", pinyin: "Qǐngwèn yǒu sīrén jiàoliàn ma?", portuguese: "Tem personal trainer?", category: "Academia" },
  { id: 42, chinese: "营业时间是几点到几点？", pinyin: "Yíngyè shíjiān shì jǐ diǎn dào jǐ diǎn?", portuguese: "Qual é o horário de funcionamento?", category: "Academia" },
  // 15. Encontro com amigos
  { id: 43, chinese: "好久不见！你最近怎么样？", pinyin: "Hǎojiǔ bú jiàn! Nǐ zuìjìn zěnmeyàng?", portuguese: "Quanto tempo! Como você está?", category: "Encontro com amigos" },
  { id: 44, chinese: "下次再一起玩吧。", pinyin: "Xià cì zài yīqǐ wán ba.", portuguese: "Vamos sair juntos da próxima vez.", category: "Encontro com amigos" },
  { id: 45, chinese: "今天玩得很开心。", pinyin: "Jīntiān wán de hěn kāixīn.", portuguese: "Hoje me diverti muito.", category: "Encontro com amigos" },
  // 16. Apresentação pessoal
  { id: 46, chinese: "我叫……，我是巴西人。", pinyin: "Wǒ jiào..., wǒ shì Bāxī rén.", portuguese: "Meu nome é..., sou brasileiro.", category: "Apresentação pessoal" },
  { id: 47, chinese: "我在学中文。", pinyin: "Wǒ zài xué Zhōngwén.", portuguese: "Estou aprendendo chinês.", category: "Apresentação pessoal" },
  { id: 48, chinese: "我来中国两个月了。", pinyin: "Wǒ lái Zhōngguó liǎng gè yuè le.", portuguese: "Estou na China há dois meses.", category: "Apresentação pessoal" },
  // 17. Clima
  { id: 49, chinese: "今天天气真好。", pinyin: "Jīntiān tiānqì zhēn hǎo.", portuguese: "O tempo hoje está muito bom.", category: "Clima" },
  { id: 50, chinese: "明天会更冷。", pinyin: "Míngtiān huì gèng lěng.", portuguese: "Amanhã vai ficar mais frio.", category: "Clima" },
  { id: 51, chinese: "出门记得带伞。", pinyin: "Chūmén jìde dài sǎn.", portuguese: "Lembre-se de levar o guarda-chuva ao sair.", category: "Clima" },
  // 18. Marcar refeição
  { id: 52, chinese: "今晚一起吃饭吧？", pinyin: "Jīn wǎn yīqǐ chīfàn ba?", portuguese: "Vamos jantar juntos hoje?", category: "Marcar refeição" },
  { id: 53, chinese: "你想吃什么？", pinyin: "Nǐ xiǎng chī shénme?", portuguese: "O que você quer comer?", category: "Marcar refeição" },
  { id: 54, chinese: "我请客。", pinyin: "Wǒ qǐngkè.", portuguese: "Eu pago.", category: "Marcar refeição" },
  // 19. Reclamação/Troca
  { id: 55, chinese: "这个产品有问题。", pinyin: "Zhège chǎnpǐn yǒu wèntí.", portuguese: "Este produto tem um problema.", category: "Reclamação/Troca" },
  { id: 56, chinese: "我要退款。", pinyin: "Wǒ yào tuìkuǎn.", portuguese: "Eu quero um reembolso.", category: "Reclamação/Troca" },
  { id: 57, chinese: "这不是我点的。", pinyin: "Zhè bú shì wǒ diǎn de.", portuguese: "Isso não é o que eu pedi.", category: "Reclamação/Troca" },
  // 20. Emergência
  { id: 58, chinese: "请帮我叫救护车！", pinyin: "Qǐng bāng wǒ jiào jiùhùchē!", portuguese: "Por favor, chame uma ambulância!", category: "Emergência" },
  { id: 59, chinese: "我的护照丢了。", pinyin: "Wǒ de hùzhào diū le.", portuguese: "Perdi meu passaporte.", category: "Emergência" },
  { id: 60, chinese: "请帮我报警。", pinyin: "Qǐng bāng wǒ bàojǐng.", portuguese: "Por favor, me ajude a chamar a polícia.", category: "Emergência" }
];

const dialoguesData = [
  // 1. Cafeteria/Restaurante
  { id: 1, title_pt: "No restaurante", category: "Cafeteria/Restaurante", lines: [
    { speaker: "服务员", chinese: "欢迎光临！请问几位？", pinyin: "Huānyíng guānglín! Qǐngwèn jǐ wèi?", portuguese: "Bem-vindo! Quantas pessoas?" },
    { speaker: "客人", chinese: "两位，有靠窗的位子吗？", pinyin: "Liǎng wèi, yǒu kào chuāng de wèizi ma?", portuguese: "Duas, tem mesa perto da janela?" },
    { speaker: "服务员", chinese: "有的，请跟我来。", pinyin: "Yǒu de, qǐng gēn wǒ lái.", portuguese: "Sim, por favor me siga." },
    { speaker: "客人", chinese: "谢谢。请给我菜单。", pinyin: "Xièxie. Qǐng gěi wǒ càidān.", portuguese: "Obrigado. Me dê o cardápio, por favor." },
    { speaker: "服务员", chinese: "好的，您先看看，准备好了叫我。", pinyin: "Hǎo de, nín xiān kànkan, zhǔnbèi hǎo le jiào wǒ.", portuguese: "Ok, dê uma olhada primeiro, me chame quando estiver pronto." }
  ]},
  // 2. Supermercado
  { id: 2, title_pt: "No supermercado", category: "Supermercado", lines: [
    { speaker: "顾客", chinese: "请问牛奶在哪里？", pinyin: "Qǐngwèn niúnǎi zài nǎlǐ?", portuguese: "Com licença, onde fica o leite?" },
    { speaker: "店员", chinese: "在第三排的冷柜里。", pinyin: "Zài dì sān pái de lěngguì lǐ.", portuguese: "No refrigerador da terceira fileira." },
    { speaker: "顾客", chinese: "好的，谢谢。这个打折吗？", pinyin: "Hǎo de, xièxie. Zhège dǎzhé ma?", portuguese: "Ok, obrigado. Isso tem desconto?" },
    { speaker: "店员", chinese: "打八折，很划算的。", pinyin: "Dǎ bā zhé, hěn huásuàn de.", portuguese: "20% de desconto, é uma boa oferta." },
    { speaker: "顾客", chinese: "那我要两个。", pinyin: "Nà wǒ yào liǎng gè.", portuguese: "Então eu quero dois." }
  ]},
  // 3. Transporte
  { id: 3, title_pt: "Pegando um táxi", category: "Transporte", lines: [
    { speaker: "乘客", chinese: "师傅，去火车站。", pinyin: "Shīfu, qù huǒchēzhàn.", portuguese: "Motorista, vá para a estação de trem." },
    { speaker: "司机", chinese: "好的，走哪条路？", pinyin: "Hǎo de, zǒu nǎ tiáo lù?", portuguese: "Ok, qual caminho?" },
    { speaker: "乘客", chinese: "走最快的路吧，我赶时间。", pinyin: "Zǒu zuì kuài de lù ba, wǒ gǎn shíjiān.", portuguese: "Vá pelo caminho mais rápido, estou com pressa." },
    { speaker: "司机", chinese: "没问题，大概二十分钟到。", pinyin: "Méi wèntí, dàgài èrshí fēnzhōng dào.", portuguese: "Sem problema, chegaremos em uns 20 minutos." },
    { speaker: "乘客", chinese: "好的，谢谢。", pinyin: "Hǎo de, xièxie.", portuguese: "Ok, obrigado." }
  ]},
  // 4. Pedir direções
  { id: 4, title_pt: "Pedindo direção na rua", category: "Pedir direções", lines: [
    { speaker: "路人A", chinese: "你好，请问最近的地铁站怎么走？", pinyin: "Nǐ hǎo, qǐngwèn zuìjìn de dìtiě zhàn zěnme zǒu?", portuguese: "Olá, como chego à estação de metrô mais perto?" },
    { speaker: "路人B", chinese: "一直往前走，到十字路口左转。", pinyin: "Yīzhí wǎng qián zǒu, dào shízì lùkǒu zuǒ zhuǎn.", portuguese: "Siga em frente e vire à esquerda no cruzamento." },
    { speaker: "路人A", chinese: "大概走几分钟？", pinyin: "Dàgài zǒu jǐ fēnzhōng?", portuguese: "Mais ou menos quantos minutos a pé?" },
    { speaker: "路人B", chinese: "五分钟就到了。", pinyin: "Wǔ fēnzhōng jiù dào le.", portuguese: "Cinco minutos e você chega." },
    { speaker: "路人A", chinese: "太好了，谢谢你！", pinyin: "Tài hǎo le, xièxie nǐ!", portuguese: "Ótimo, obrigado!" }
  ]},
  // 5. Hospital
  { id: 5, title_pt: "No consultório médico", category: "Hospital", lines: [
    { speaker: "医生", chinese: "你哪里不舒服？", pinyin: "Nǐ nǎlǐ bù shūfu?", portuguese: "O que está sentindo?" },
    { speaker: "病人", chinese: "我头疼，还有点发烧。", pinyin: "Wǒ tóu téng, hái yǒudiǎn fāshāo.", portuguese: "Dor de cabeça e um pouco de febre." },
    { speaker: "医生", chinese: "多长时间了？", pinyin: "Duō cháng shíjiān le?", portuguese: "Há quanto tempo?" },
    { speaker: "病人", chinese: "两天了。", pinyin: "Liǎng tiān le.", portuguese: "Dois dias." },
    { speaker: "医生", chinese: "我给你开点药，多休息，多喝水。", pinyin: "Wǒ gěi nǐ kāi diǎn yào, duō xiūxi, duō hē shuǐ.", portuguese: "Vou receitar um remédio. Descanse bastante e beba muita água." }
  ]},
  // 6. Banco
  { id: 6, title_pt: "No banco", category: "Banco", lines: [
    { speaker: "客户", chinese: "你好，我想换一些人民币。", pinyin: "Nǐ hǎo, wǒ xiǎng huàn yīxiē Rénmínbì.", portuguese: "Olá, quero trocar para RMB." },
    { speaker: "职员", chinese: "请出示您的护照。", pinyin: "Qǐng chūshì nín de hùzhào.", portuguese: "Por favor, mostre seu passaporte." },
    { speaker: "客户", chinese: "给你。今天汇率怎么样？", pinyin: "Gěi nǐ. Jīntiān huìlǜ zěnmeyàng?", portuguese: "Aqui está. Como está a taxa de câmbio hoje?" },
    { speaker: "职员", chinese: "一美元换七块二。", pinyin: "Yī Měiyuán huàn qī kuài èr.", portuguese: "Um dólar troca por 7.2 yuans." },
    { speaker: "客户", chinese: "好的，我换五百美元。", pinyin: "Hǎo de, wǒ huàn wǔbǎi Měiyuán.", portuguese: "Ok, quero trocar 500 dólares." }
  ]},
  // 7. Aluguel
  { id: 7, title_pt: "Visitando um apartamento", category: "Aluguel", lines: [
    { speaker: "租客", chinese: "你好，我想看一下这个房间。", pinyin: "Nǐ hǎo, wǒ xiǎng kàn yīxià zhège fángjiān.", portuguese: "Olá, quero ver este quarto." },
    { speaker: "房东", chinese: "好的，请进。", pinyin: "Hǎo de, qǐng jìn.", portuguese: "Ok, entre por favor." },
    { speaker: "租客", chinese: "房租一个月多少钱？", pinyin: "Fángzū yī gè yuè duōshao qián?", portuguese: "Quanto é o aluguel por mês?" },
    { speaker: "房东", chinese: "三千块，押一付三。", pinyin: "Sān qiān kuài, yā yī fù sān.", portuguese: "3000 yuans, um mês de caução e três de aluguel." },
    { speaker: "租客", chinese: "包水电吗？", pinyin: "Bāo shuǐ diàn ma?", portuguese: "Inclui água e luz?" }
  ]},
  // 8. Entrevista/Trabalho
  { id: 8, title_pt: "Na entrevista de emprego", category: "Entrevista/Trabalho", lines: [
    { speaker: "面试官", chinese: "请做一下自我介绍。", pinyin: "Qǐng zuò yīxià zìwǒ jièshào.", portuguese: "Por favor, se apresente." },
    { speaker: "应聘者", chinese: "你好，我叫……，有三年工作经验。", pinyin: "Nǐ hǎo, wǒ jiào..., yǒu sān nián gōngzuò jīngyàn.", portuguese: "Olá, meu nome é..., tenho 3 anos de experiência." },
    { speaker: "面试官", chinese: "你为什么想来我们公司？", pinyin: "Nǐ wèishéme xiǎng lái wǒmen gōngsī?", portuguese: "Por que quer trabalhar na nossa empresa?" },
    { speaker: "应聘者", chinese: "我很喜欢你们公司的文化。", pinyin: "Wǒ hěn xǐhuan nǐmen gōngsī de wénhuà.", portuguese: "Gosto muito da cultura da empresa de vocês." },
    { speaker: "面试官", chinese: "好的，我们会尽快通知你结果。", pinyin: "Hǎo de, wǒmen huì jǐnkuài tōngzhī nǐ jiéguǒ.", portuguese: "Ok, vamos te informar o resultado o mais rápido possível." }
  ]},
  // 9. Telefone
  { id: 9, title_pt: "Ligação telefônica", category: "Telefone", lines: [
    { speaker: "小王", chinese: "喂，你好！", pinyin: "Wèi, nǐ hǎo!", portuguese: "Alô!" },
    { speaker: "小李", chinese: "你好，我是小李。你现在方便说话吗？", pinyin: "Nǐ hǎo, wǒ shì Xiǎo Lǐ. Nǐ xiànzài fāngbiàn shuōhuà ma?", portuguese: "Oi, sou o Xiao Li. Pode falar agora?" },
    { speaker: "小王", chinese: "方便，什么事？", pinyin: "Fāngbiàn, shénme shì?", portuguese: "Sim, o que foi?" },
    { speaker: "小李", chinese: "明天的会议改到下午三点了。", pinyin: "Míngtiān de huìyì gǎi dào xiàwǔ sān diǎn le.", portuguese: "A reunião de amanhã foi mudada para as 15h." },
    { speaker: "小王", chinese: "好的，知道了。谢谢通知。", pinyin: "Hǎo de, zhīdào le. Xièxie tōngzhī.", portuguese: "Ok, entendi. Obrigado por avisar." }
  ]},
  // 10. Shopping
  { id: 10, title_pt: "Na loja de roupas", category: "Shopping", lines: [
    { speaker: "顾客", chinese: "这件衬衫有小号的吗？", pinyin: "Zhè jiàn chènshān yǒu xiǎo hào de ma?", portuguese: "Essa camisa tem tamanho P?" },
    { speaker: "店员", chinese: "有的，您稍等。", pinyin: "Yǒu de, nín shāo děng.", portuguese: "Sim, um momento." },
    { speaker: "顾客", chinese: "可以试穿吗？", pinyin: "Kěyǐ shì chuān ma?", portuguese: "Posso experimentar?" },
    { speaker: "店员", chinese: "当然可以，试衣间在那边。", pinyin: "Dāngrán kěyǐ, shìyījiān zài nàbiān.", portuguese: "Claro, o provador é ali." },
    { speaker: "顾客", chinese: "很合适，我要这件。", pinyin: "Hěn héshì, wǒ yào zhè jiàn.", portuguese: "Ficou bom, vou levar esta." }
  ]},
  // 11. Hotel
  { id: 11, title_pt: "Check-in no hotel", category: "Hotel", lines: [
    { speaker: "客人", chinese: "你好，我预订了一个房间。", pinyin: "Nǐ hǎo, wǒ yùdìng le yī gè fángjiān.", portuguese: "Olá, eu reservei um quarto." },
    { speaker: "前台", chinese: "请出示您的身份证或护照。", pinyin: "Qǐng chūshì nín de shēnfènzhèng huò hùzhào.", portuguese: "Por favor, mostre seu documento ou passaporte." },
    { speaker: "客人", chinese: "给你。几点退房？", pinyin: "Gěi nǐ. Jǐ diǎn tuì fáng?", portuguese: "Aqui está. Qual horário do check-out?" },
    { speaker: "前台", chinese: "中午十二点之前。", pinyin: "Zhōngwǔ shí'èr diǎn zhīqián.", portuguese: "Antes do meio-dia." },
    { speaker: "客人", chinese: "好的，谢谢。", pinyin: "Hǎo de, xièxie.", portuguese: "Ok, obrigado." }
  ]},
  // 12. Delivery
  { id: 12, title_pt: "Recebendo entrega", category: "Delivery", lines: [
    { speaker: "快递员", chinese: "你好，你的快递到了。", pinyin: "Nǐ hǎo, nǐ de kuàidì dào le.", portuguese: "Olá, sua encomenda chegou." },
    { speaker: "收件人", chinese: "好的，放在门口可以吗？", pinyin: "Hǎo de, fàng zài ménkǒu kěyǐ ma?", portuguese: "Ok, pode deixar na porta?" },
    { speaker: "快递员", chinese: "可以，请确认一下手机号。", pinyin: "Kěyǐ, qǐng quèrèn yīxià shǒujī hào.", portuguese: "Sim, por favor confirme o número de celular." },
    { speaker: "收件人", chinese: "尾号是8856。", pinyin: "Wěi hào shì bā bā wǔ liù.", portuguese: "Os últimos dígitos são 8856." },
    { speaker: "快递员", chinese: "对的，已经放好了，再见。", pinyin: "Duì de, yǐjīng fàng hǎo le, zàijiàn.", portuguese: "Certo, já deixei. Tchau." }
  ]},
  // 13. Barbearia
  { id: 13, title_pt: "No salão de beleza", category: "Barbearia", lines: [
    { speaker: "顾客", chinese: "我想剪头发。", pinyin: "Wǒ xiǎng jiǎn tóufa.", portuguese: "Eu quero cortar o cabelo." },
    { speaker: "理发师", chinese: "想剪什么样的？", pinyin: "Xiǎng jiǎn shénme yàng de?", portuguese: "Que estilo quer?" },
    { speaker: "顾客", chinese: "两边短，上面稍微留长一点。", pinyin: "Liǎng biān duǎn, shàngmiàn shāowēi liú cháng yīdiǎn.", portuguese: "Curto nas laterais, um pouco mais longo em cima." },
    { speaker: "理发师", chinese: "好的，需要洗头吗？", pinyin: "Hǎo de, xūyào xǐ tóu ma?", portuguese: "Ok, quer lavar o cabelo?" },
    { speaker: "顾客", chinese: "好的，洗一下。", pinyin: "Hǎo de, xǐ yīxià.", portuguese: "Sim, pode lavar." }
  ]},
  // 14. Academia
  { id: 14, title_pt: "Na academia", category: "Academia", lines: [
    { speaker: "会员", chinese: "你好，我想办一张年卡。", pinyin: "Nǐ hǎo, wǒ xiǎng bàn yī zhāng nián kǎ.", portuguese: "Olá, quero fazer um plano anual." },
    { speaker: "教练", chinese: "年卡三千六，包含所有课程。", pinyin: "Nián kǎ sān qiān liù, bāohán suǒyǒu kèchéng.", portuguese: "O plano anual é 3600, inclui todas as aulas." },
    { speaker: "会员", chinese: "可以先体验一天吗？", pinyin: "Kěyǐ xiān tǐyàn yī tiān ma?", portuguese: "Posso experimentar um dia primeiro?" },
    { speaker: "教练", chinese: "当然可以，今天免费体验。", pinyin: "Dāngrán kěyǐ, jīntiān miǎnfèi tǐyàn.", portuguese: "Claro, hoje é experiência gratuita." },
    { speaker: "会员", chinese: "太好了，谢谢！", pinyin: "Tài hǎo le, xièxie!", portuguese: "Ótimo, obrigado!" }
  ]},
  // 15. Encontro com amigos
  { id: 15, title_pt: "Encontro com amigos", category: "Encontro com amigos", lines: [
    { speaker: "小明", chinese: "好久不见！你最近怎么样？", pinyin: "Hǎojiǔ bú jiàn! Nǐ zuìjìn zěnmeyàng?", portuguese: "Quanto tempo! Como você está?" },
    { speaker: "小红", chinese: "我很好！你呢？", pinyin: "Wǒ hěn hǎo! Nǐ ne?", portuguese: "Estou bem! E você?" },
    { speaker: "小明", chinese: "也不错。今天我请客！", pinyin: "Yě búcuò. Jīntiān wǒ qǐngkè!", portuguese: "Também estou bem. Hoje eu pago!" },
    { speaker: "小红", chinese: "太好了！去哪里吃？", pinyin: "Tài hǎo le! Qù nǎlǐ chī?", portuguese: "Ótimo! Onde vamos comer?" },
    { speaker: "小明", chinese: "去那家新开的火锅店吧。", pinyin: "Qù nà jiā xīn kāi de huǒguō diàn ba.", portuguese: "Vamos àquela nova casa de hotpot." }
  ]},
  // 16. Apresentação pessoal
  { id: 16, title_pt: "Se apresentando", category: "Apresentação pessoal", lines: [
    { speaker: "A", chinese: "你好！你叫什么名字？", pinyin: "Nǐ hǎo! Nǐ jiào shénme míngzi?", portuguese: "Olá! Qual é o seu nome?" },
    { speaker: "B", chinese: "我叫Pedro，我是巴西人。你呢？", pinyin: "Wǒ jiào Pedro, wǒ shì Bāxī rén. Nǐ ne?", portuguese: "Me chamo Pedro, sou brasileiro. E você?" },
    { speaker: "A", chinese: "我叫小刘。你中文说得很好！", pinyin: "Wǒ jiào Xiǎo Liú. Nǐ Zhōngwén shuō de hěn hǎo!", portuguese: "Me chamo Xiao Liu. Você fala chinês muito bem!" },
    { speaker: "B", chinese: "谢谢！我在学习中文。", pinyin: "Xièxie! Wǒ zài xuéxí Zhōngwén.", portuguese: "Obrigado! Estou estudando chinês." },
    { speaker: "A", chinese: "很高兴认识你！", pinyin: "Hěn gāoxìng rènshi nǐ!", portuguese: "Prazer em te conhecer!" }
  ]},
  // 17. Clima
  { id: 17, title_pt: "Conversando sobre o tempo", category: "Clima", lines: [
    { speaker: "A", chinese: "今天天气真不错啊。", pinyin: "Jīntiān tiānqì zhēn búcuò a.", portuguese: "O tempo está muito bom hoje." },
    { speaker: "B", chinese: "是啊，不过明天好像要下雨。", pinyin: "Shì a, búguò míngtiān hǎoxiàng yào xià yǔ.", portuguese: "É, mas parece que amanhã vai chover." },
    { speaker: "A", chinese: "真的吗？那我得带伞。", pinyin: "Zhēn de ma? Nà wǒ děi dài sǎn.", portuguese: "Sério? Então preciso levar um guarda-chuva." },
    { speaker: "B", chinese: "对，最近天气变化很大。", pinyin: "Duì, zuìjìn tiānqì biànhuà hěn dà.", portuguese: "Sim, o tempo tem mudado muito ultimamente." },
    { speaker: "A", chinese: "希望周末天气好。", pinyin: "Xīwàng zhōumò tiānqì hǎo.", portuguese: "Espero que o tempo fique bom no fim de semana." }
  ]},
  // 18. Marcar refeição
  { id: 18, title_pt: "Combinando jantar", category: "Marcar refeição", lines: [
    { speaker: "A", chinese: "今晚有空吗？一起吃饭吧。", pinyin: "Jīn wǎn yǒu kòng ma? Yīqǐ chīfàn ba.", portuguese: "Está livre hoje à noite? Vamos jantar." },
    { speaker: "B", chinese: "好啊！你想吃什么？", pinyin: "Hǎo a! Nǐ xiǎng chī shénme?", portuguese: "Claro! O que quer comer?" },
    { speaker: "A", chinese: "吃中餐怎么样？", pinyin: "Chī Zhōngcān zěnmeyàng?", portuguese: "Que tal comida chinesa?" },
    { speaker: "B", chinese: "可以！几点见面？", pinyin: "Kěyǐ! Jǐ diǎn jiànmiàn?", portuguese: "Pode! Que horas nos encontramos?" },
    { speaker: "A", chinese: "七点在餐厅门口见。", pinyin: "Qī diǎn zài cāntīng ménkǒu jiàn.", portuguese: "Às 7 na porta do restaurante." }
  ]},
  // 19. Reclamação/Troca
  { id: 19, title_pt: "Devolvendo um produto", category: "Reclamação/Troca", lines: [
    { speaker: "顾客", chinese: "你好，我想退这个商品。", pinyin: "Nǐ hǎo, wǒ xiǎng tuì zhège shāngpǐn.", portuguese: "Olá, quero devolver este produto." },
    { speaker: "店员", chinese: "请问是什么问题？", pinyin: "Qǐngwèn shì shénme wèntí?", portuguese: "Qual é o problema?" },
    { speaker: "顾客", chinese: "质量有问题，买回去就坏了。", pinyin: "Zhìliàng yǒu wèntí, mǎi huíqù jiù huài le.", portuguese: "Problema de qualidade, estragou assim que comprei." },
    { speaker: "店员", chinese: "有收据吗？", pinyin: "Yǒu shōujù ma?", portuguese: "Tem o recibo?" },
    { speaker: "顾客", chinese: "有的，在这里。", pinyin: "Yǒu de, zài zhèlǐ.", portuguese: "Sim, aqui está." }
  ]},
  // 20. Emergência
  { id: 20, title_pt: "Situação de emergência", category: "Emergência", lines: [
    { speaker: "A", chinese: "快来帮忙！有人晕倒了！", pinyin: "Kuài lái bāngmáng! Yǒu rén yūndǎo le!", portuguese: "Venha ajudar! Alguém desmaiou!" },
    { speaker: "B", chinese: "我马上打120！", pinyin: "Wǒ mǎshàng dǎ yāo èr líng!", portuguese: "Vou ligar para o 120 (ambulância) agora!" },
    { speaker: "A", chinese: "我们在公园北门附近。", pinyin: "Wǒmen zài gōngyuán běi mén fùjìn.", portuguese: "Estamos perto do portão norte do parque." },
    { speaker: "B", chinese: "好的，救护车马上就来。", pinyin: "Hǎo de, jiùhùchē mǎshàng jiù lái.", portuguese: "Ok, a ambulância já está a caminho." },
    { speaker: "A", chinese: "谢谢你！请大家让一让。", pinyin: "Xièxie nǐ! Qǐng dàjiā ràng yī ràng.", portuguese: "Obrigado! Por favor, abram espaço." }
  ]}
];
