export interface Person {
    name: string;
    nameAlphabet?: string;
    shortDescription: string;
    description?: string;
    categories: Category[];
    alive: boolean;
}

export type Category = string;

export const people: Person[] = [
    {
        name: 'Abigail',
        shortDescription: 'Vermist meisje',
        description: 'Meisje van ongeveer 19j, vermist. Eigenaar van hond [Lancelot].\n' +
            'Werkt in castle Ravenloft als bediende. [Strahd] heeft haar gelokt met brief, heeft haar "speciale kus" beloofd',
        categories: ['Barovia', 'Ravenloft'],
        alive: true
    },
    {
        name: 'The Abbot',
        nameAlphabet: 'Abbot, the',
        shortDescription: 'Experimenteer op mensen/lijken',
        description: 'Woont in Abby Krezk, doet dingen met lijken.\n' +
            'Heeft Yurtle tot leven gewekt (heeft ons nog twee keer tegoed omdat we gezicht voor hem gevonden hebben).\n' +
            'Zijn creatures zijn Belleview family\n' +
            'Kwam zo\'n 100 jaar geleden en nam de abbey over, die lag leeg. Ervoor had [St. Markovia] deze.\n' +
            'Bevolking van Krezk dacht dat hij Strahd was, ze moesten hem regelmatig wijn betalen.',
        categories: ['Krezk'],
        alive: false
    },
    {
        name: 'Alec de Minski',
        shortDescription: 'Opgepakt omdat moest lachen',
        description: 'Moest tijdens feest lachen toen rieten beeld niet branden o.w.v. regen → Opgepakt (toen was [Vargas] nog burgemeester)',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Anastrasya Villisevic',
        shortDescription: 'Bride of Strahd',
        description: 'Bride of Strahd. Erg jaloers op [Tatjana]',
        categories: ['Ravenloft'],
        alive: true
    },
    {
        name: 'Annabel',
        shortDescription: 'Dochter van Luvash, was ontvoerd',
        description: 'Dochter van [Luvash], was ontvoerd door man die haar wilden verdrinken uit bijgeloof (geleerd uit boek dat hij van [Vargas] had gekregen)',
        categories: ['Vistani & Dusk Elves'],
        alive: true
    },
    {
        name: 'Arganvast',
        shortDescription: 'Zilveren draak, onthoofd door Strahd',
        description: 'Zilveren draak onthoofd door [Strahd]. Hoofd hangt in castle Ravenloft.\n' +
            'Oprichter van order of the silver dragon\n',
        categories: ['Arganvasthold'],
        alive: false
    },
    {
        name: 'Arigal',
        shortDescription: 'Vistani, broer van [Luvash]',
        description: 'Vistani, broer van [Luvash]. Heeft Brandon/Gilliam naar Barovia gelokt door nepbrief af te geven (in opdracht van [Strahd]).',
        categories: ['Vistani & Dusk Elves'],
        alive: true
    },
    {
        name: 'Baba Yassiga',
        shortDescription: 'Vermoedelijk dief van 1 van wijn brouw gems',
        description:
            'Vermoedelijk dief van 1 van wijn brouw gems. Woont in Berez.' +
            'In Berez was vroeger een opstand, Strahd heeft het als straf onder water gezet.',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Bella',
        shortDescription: 'Heks uit molen',
        description: 'Heks uit molen. Zus van [Margatha] en [Ofolia]',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'Cassimar',
        shortDescription: 'Leider Dusk Elves',
        description: 'Leider Dusk Elves. Zijn vrouw was ooit bruid van Strahd, zijn tribe heeft haar vermoord.\n' +
            'Is op zoek naar Vestige [Zuduh] om zijn vrouw terug tot leven te wekken.',
        categories: ['Vistani & Dusk Elves'],
        alive: true
    },
    {
        name: 'C. Cyrus Belleview',
        shortDescription: 'Concierge Strahd',
        description: 'Concierge [Strahd]. Heeft hondenneus en bokkepoot. Familie die door [the Abbot] wordt gemarteld/verminkt/geknutselt',
        categories: ['Ravenloft'],
        alive: true
    },
    {
        name: 'Clofdia',
        shortDescription: 'Verdwenen dienstmeisje burgemeester',
        description: 'Verdwenen dienstmeisje burgemeester',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Dania',
        shortDescription: 'Moeder van Bella, Margatha en Ofolia',
        description: 'Moeder van [Bella], [Margatha] en [Ofolia]',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Darovich',
        shortDescription: 'Eigenaar b&b',
        description: 'Eigenaar b&b. Zijn vrouw en kinderen zijn door [Fenrir] gedood',
        categories: ['Krezk'],
        alive: true
    },
    {
        name: 'Davion Martikov',
        shortDescription: 'Wijn brouwer',
        description: 'Wijn brouwer. Out of business omdat overvallen door druids van Yesterhill. Wijn brouwen was mogelijk door magische gems die in grond staken, maar zijn gestolen.\n' +
            'Lid van keepers of the feather',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Dimitri',
        shortDescription: 'Burgemeester Krezk',
        description: 'Burgemeester Krezk. \n' +
            'Gedood door belleview creatures. [the Abbot] heeft hun losgelaten op Krezk, omdat bruidjurk niet op tijd is aangekomen.\n',
        categories: ['Krezk'],
        alive: false
    },
    {
        name: 'Donavich',
        shortDescription: 'Priester, zoon is vampier',
        description: 'Priester, zoon is vampier, opgesloten in kelder',
        categories: ['Barovia'],
        alive: true
    },
    {
        name: 'Elvir Martkiov',
        shortDescription: 'Broer van Urwin (en Davion?)',
        description: 'Broer van [Urwin Martikov] (en [Davion Martikov]?). Lid van keepers of the feather',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'Escher',
        shortDescription: 'Adviseur Strahd',
        description: 'Adviseur [Strahd]',
        categories: ['Ravenloft'],
        alive: true
    },
    {
        name: 'Esmeralda',
        shortDescription: 'Op zoek naar Rudolph von Richten',
        description: 'Komt uit andere realm, op zoek naar [Rudolph von Richten].\n' +
            'Was er ook bij, bij etentje Strahd',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Felix',
        shortDescription: 'Weeskind, bezeten door demon uit locket',
        description: 'Weeskind, bezeten door demon uit locket',
        categories: ['Valaki'],
        alive: false
    },
    {
        name: 'Fenrir',
        shortDescription: 'Grote witte wolf',
        description: 'Grote witte wolf. Heeft [Savid] gedood.',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Fiona Watcher',
        shortDescription: 'Leider la resistance',
        description: 'Leider la resistance. Heeft overgenomen als Burgemeester.\n' +
            'Is pro [Strahd] (of toch zeker niet tegen)\n' +
            'Pentagram in kelder van haar huis\n' +
            'Haar man is dood, ligt in haar huis met twee munten op ogen\n' +
            'Gestorven tijdens bomaanslag op koets.\n',
        categories: ['Valaki'],
        alive: false
    },
    {
        name: 'Fritz von Weerg',
        shortDescription: 'Schrijver, uitvinder',
        description: 'Schrijver boeken over clockwork man en ander speelgoed. Blinky heeft uit zijn boeken geleerd.',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Godfree, Sir',
        nameAlphabet: 'Sir Godfree',
        shortDescription: 'Paladin van order of the silver dragon, Undead',
        description: 'Paladin order of the silver dragon. Revenant. Relatie met [Vladimir Hornguard].\n' +
            'Mogen niets tegen Strahd doen. Hun doel als revenant had bereikt moeten zijn toen Strahd stierf en vampire werd. Maar hun ziel kon Barovia niet verlaten.\n',
        categories: ['Arganvasthold'],
        alive: true
    },
    {
        name: 'Halastar Blackrobe',
        shortDescription: 'Tovenaar, tegenstander van [Strahd]',
        description: 'Tovenaar. Heeft ooit opstand geleid tegen [Strahd], maar verslagen.',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Hendrik the coffinmaker',
        shortDescription: 'Moest beenderen stelen',
        description: 'Werd gedwongen door een [Ludmilla Villisovic] beenderen van kerk [Lucien] te stelen',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Ilia',
        shortDescription: 'Zoon van Dimitri. Resurrected',
        description: 'Zoon van [Dimitri]. Gestorven door ziekte. Resurrected door [the Abbot] (in ruil voor bruidskleren)',
        categories: ['Krezk'],
        alive: true
    },
    {
        name: 'Ireena',
        shortDescription: 'Geadopteerde dochter Kolyan',
        description: 'Geadopteerde dochter burg. [Kolyan]. Al 2x gebeten door Strahd\n' +
            '→ Derde keer bijten zou haar van [Strahd] maken\n' +
            'Mogelijks de zus van [Isek]\n' +
            'Host van ziel van [Tatjana] (volgens Strahd)\n',
        categories: ['Barovia'],
        alive: true
    },
    {
        name: 'Isek',
        shortDescription: 'Captain guard met demon hand',
        description: 'Captain guard met demon hand. \n' +
            'Wees geworden na aanval door wolven. Arm toen verloren, jaren later magische demon arm.\n' +
            '(Denkt dat [Ireena] zijn zus is, zijn zus was verdwenen na de wolven aanval).',
        categories: ['Valaki'],
        alive: false
    },
    {
        name: 'Ismark',
        shortDescription: 'Burgemeester Barovia (zoon van)',
        description: 'Burgemeester Barovia (zoon van gestorven burgemeester [Kolyan])',
        categories: ['Barovia'],
        alive: true
    },
    {
        name: 'Kiril',
        shortDescription: 'Weerwolvenbaas',
        description: 'Weerwolvenbaas en baas van [Fenrir]',
        categories: ['Weerwolven'],
        alive: false
    },
    {
        name: 'Kolyan',
        shortDescription: 'Burgemeester Barovia',
        description: 'Burgemeester Barovia, gestorven opgevolgd door zoon [Ismark]',
        categories: ['Barovia'],
        alive: false
    },
    {
        name: 'Lancelot',
        shortDescription: 'Hond uit spookhuis',
        description: 'Hond uit spookhuis, baasje is [Abigail]',
        categories: ['Barovia'],
        alive: true
    },
    {
        name: 'Lucien',
        shortDescription: 'Priester',
        description: 'Priester, mensen doken onder in zijn kerk omdat schrik voor Strahd hadden. Heilige grond zou bescherming bieden, maar beenderen van Saint Androl zijn gestolen. Geen heilige grond meer.\n' +
            'Gevlucht naar Village of Barovia omdat [Fiona Watcher] hem ging ophangen\n',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Ludmilla Villisovic',
        shortDescription: 'Vampire spawn, bride van Strahd',
        description: 'Vampire spawn, bride van Strahd. Heeft beenderen van kerk [Lucien] laten stelen. ' +
            'We hebben haar in bergen vermoord, ze experimenteerde op [Emiel Doraneska] (en andere weerwolven?).',
        categories: ['Ravenloft'],
        alive: false
    },
    {
        name: 'Luvash',
        shortDescription: 'Vistani, vader Annabel',
        description: 'Vistani, vader [Annabel]. Broer van [Arigal]',
        categories: ['Vistani & Dusk Elves'],
        alive: true
    },
    {
        name: 'Lydia',
        shortDescription: 'Vrouw van burgemeester Vargas',
        description: 'Vrouw van burgemeester [Vargas]. Zou dood zijn volgens [Fiona Watcher].',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Madam Eva',
        shortDescription: 'Zigeuner vrouw, deed voorspellingen',
        description: 'Zigeuner vrouw, deed voorspellingen',
        categories: ['Vistani & Dusk Elves'],
        alive: true
    },
    {
        name: 'Margatha',
        shortDescription: 'Taartheks, uit molen, a.k.a. Granny',
        description: 'Taartheks, uit molen, a.k.a. Granny. Zus van [Bella] en [Ofolia]',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'Millivoy',
        shortDescription: 'Weeskind bezeten door Felix',
        description: 'Weeskind bezeten door [Felix], had heilige beenderen gestolen',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Ofolia',
        shortDescription: 'Heks uit molen',
        description: 'Heks uit molen. Zus van [Bella] en [Margatha]',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'Ractovia',
        shortDescription: 'Carnaval Ringmeester',
        description: 'Carnaval ringmeester, ontmoet in Blue Water Inn Valaki.\n' +
            'Hij heeft zijn tijger losgelaten om Vistani te doden (tijger liet Dusk Elves met rust).',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Rahadin',
        shortDescription: 'Chamberlin van Strahd, geeft opdrachten aan Dusk Elves broers',
        description: 'Chamberlin van [Strahd], geeft opdrachten aan [Arigal] / [Luvash]\n',
        categories: ['Ravenloft'],
        alive: true
    },
    {
        name: 'Rudolph von Richten',
        shortDescription: 'Bekende vampire hunter',
        description: 'Bekende vampire hunter, vermist',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Savid',
        shortDescription: 'Dusk Elf, tegengekomen in Argenvasthold',
        description: 'Tegengekomen in Argenvasthold, was op zoek naar [Annabel].\n' +
            'Gedood door wolf [Fenrir] (leek specifiek op hem gericht)\n',
        categories: ['Vistani & Dusk Elves'],
        alive: false
    },
    {
        name: 'Sergei',
        shortDescription: 'Broer van Strahd',
        description: 'Broer van [Strahd]. Tombe is in castle ravenloft.\n' +
            'Verloofd met [Tatjana], gedood door Strahd\n',
        categories: ['Ravenloft'],
        alive: false
    },
    {
        name: 'Stella',
        shortDescription: 'Dochter Fiona',
        description: 'Dochter [Fiona Watcher]. Was ooit uitgehuwd aan [Viktor], mentaal ziek van geworden (experimenteerde met spells op haar).',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Strahd',
        shortDescription: 'asdfasdf',
        description: 'Zit vast in Barovia\n' +
            'Ware liefde was Tatjana, er zou een host voor haar ziel zijn.\n' +
            'Gedood nadat Sergei vermoord, maar stierf niet, werd undead (door pact met Vol)\n',
        categories: ['Ravenloft'],
        alive: true
    },
    {
        name: 'Tatjana',
        shortDescription: 'asfd',
        description: 'Ware liefde van Strahd\n' +
            'Zelfmoord gepleegd nadat Sergei gedood, maar leeft mss in Ireena?\n',
        categories: ['Ravenloft'],
        alive: true
    },
    {
        name: 'Umbrah',
        shortDescription: 'Demon, zat opgesloten in locket',
        description: 'Demon zat opgesloten in locket van Felix',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'Urwin Martikov',
        shortDescription: 'Bartender in blue water inn. Broer van Davion',
        description: 'Bartender in blue water inn. Broer van wijn brouwer Davion.\n' +
            'Stond op wacht toen 10 jaar geleden eerste gem in wijn brouwerij gestolen is geweest. Was toen naar zijn vrouw gegaan i.p.v. wacht te doen.',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Valenta Popofsky',
        shortDescription: 'Bride of Strahd. Gedood na bomaanslag in Valaki.',
        description: 'Bride of Strahd. Gedood na bomaanslag in Valaki.\n' +
            'Final strike is door [Strahd] gedaan omdat ze niet goed luisterde. Ze had [Ireena] aangevallen uit jaloezie.',
        categories: ['Ravenloft'],
        alive: false
    },
    {
        name: 'Vargas',
        shortDescription: 'Burgemeester Valaki',
        description: 'Burgemeester Valaki. Huis aangevallen door angry mob (o.l.v. Fiona?) nadat dorp door vampire spawn is aangevallen.\n' +
            'Zou dood zijn volgens Fiona.',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Vasilie van Holt',
        shortDescription: 'Accountant van la resistance',
        description: 'Accountant van la resistance\n' +
            'Is vermomming van [Strahd] (tenzij er ook nog een echte Vasili rond loopt).',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Vasilka',
        shortDescription: 'Creatie van the Abbot, wil aan Strahd trouwen',
        description: 'Creatie van [the Abbot], wil aan [Strahd] trouwen',
        categories: ['Krezk'],
        alive: true
    },
    {
        name: 'Viktor',
        shortDescription: 'Zoon burgemeester Vargas, magiër',
        description: 'Zoon burgemeester [Vargas], magiër. [Stella] is aan hem uitgehuwd geweest.\n' +
            '[Fiona Watcher] gelooft dat ze hem nog moet doden om een voorspelling te laten uitkomen\n',
        categories: ['Valaki'],
        alive: true
    },
    {
        name: 'Vladimir Hornguard',
        shortDescription: 'Leider van order of the silver dragon',
        description: 'Leider van order of the silver dragon. Revenant.\n' +
            'Beschermde geheim: Diep in bergen order of evil (Ember temple)\n' +
            'Wil niet dat [Strahd] gedood wordt omdat Barovia Strahd zijn punishment is.\n',
        categories: ['Arganvasthold'],
        alive: true
    },
    {
        name: 'Zenja Romanov',
        shortDescription: 'Merchant, gedood op terugweg van Krez/Valaki',
        description: 'Merchant, gedood op terugweg van Krez/Valaki door grote wolven',
        categories: ['Valaki'],
        alive: false
    },
    {
        name: 'Winter Splinter',
        shortDescription: 'Grote boom die Wizards of wine aangevallen heeft',
        description: 'Een grote boom (vermoedelijk) vertrokken in Yesterhill.\n' +
            'Heeft de Wizards of Wine aangevallen en o.a. [Elvir Martkiov] gedood.\n' +
            'Is door ons gedood.',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'St. Markovia',
        shortDescription: 'Had vroeger controle over de abbey (oprichter, was toen een ziekenhuis). Aanbeden de Morning Lord.',
        description: 'Had vroeger controle over de abbey (was toen een ziekenhuis). Aanbeden de Morning Lord.\n' +
            '100e jaren geleden was er een opstand tegen Strahd. Opstand was de kop ingeslagen, daarna lag de abbey leeg. Tot 100 jaar geleden [The Abbot] kwam.\n',
        categories: ['Krezk'],
        alive: false
    },
    {
        name: 'Mother Night',
        shortDescription: 'Een vestige met een dark gift.',
        description: 'De Mother Night is een vestige (met een dark gift), haar avatar is een witte wolf.\n' +
            'Een vestige is een evil being dat vast zit in de Ambert Temple.\n' +
            'Ze vroeg aan Yurtle/David: "Will you defeat Strahd, will you be my champion, do you accept my gift?"',
        categories: ['Anderen'],
        alive: true
    },
    {
        name: 'Skennis',
        shortDescription: 'Een oude man / weerwolf',
        description: 'Een oude man die we tegengekomen zijn in cave van [Fenrir] / de weerwolven. Speelde fluit.',
        categories: ['Weerwolven'],
        alive: false
    },
    {
        name: 'Cloven Belleview',
        shortDescription: 'Caretaker v.d. abbey',
        description: 'Caretaker v.d. abbey',
        categories: ['Krezk'],
        alive: true
    },
    {
        name: 'Bianca',
        shortDescription: 'Weerwolf, vrouw van [Kiril]',
        description: 'Weerwolf, vrouw van [Kiril]',
        categories: ['Weerwolven'],
        alive: false
    },
    {
        name: 'Zulyca',
        shortDescription: 'Een van de enige overlevende weerwolven in de grot.',
        description:
            'Een van de enige overlevende weerwolven in de grot. We hebben haar laten gaan, ' +
            'ze beloofd geen kinderen/mensen te ontvoeren.\n' +
            'Ze was ooit in opstand tegen [Kiril] gekomen, als straf is haar man [Emiel Doraneska] naar [Strahd] gestuurd.',
        categories: ['Weerwolven'],
        alive: true
    },
    {
        name: 'Emiel Doraneska',
        shortDescription: 'Man van [Zulyca], ooit in opstand tegen [Kiril] gedaan.',
        description:
            'Man van [Zulyca], ooit in opstand tegen [Kiril] gedaan. ' +
            'Is als straf naar Strahd gestuurd.\n' +
            'Strahd liet vampier [Ludmilla Villisovic] op hem experimenteren, zat opgesloten in de bergen, wij hebben hem bevrijd.',
        categories: ['Weerwolven'],
        alive: true
    },
    {
        name: 'Kovan',
        shortDescription: 'Leider van de Barbarians, had de bloodspear.',
        description: 'Leider van de Barbarians, had de bloodspear. Door ons gedood.',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'Mordred',
        shortDescription: 'Leider van de Druids.',
        description: 'Leider van de Druids. Door ons gedood.',
        categories: ['Anderen'],
        alive: false
    },
    {
        name: 'Claudio Belasko',
        shortDescription: 'Vrouw van weeshuis, vermoord.',
        description: 'Vrouw van weeshuis, vermoord door David/Yurtle in opdracht van [Mother Night] (?).',
        categories: ['Valaki'],
        alive: false
    },
    {
        name: 'Zuduh',
        shortDescription: 'Een vestige.',
        description: 'Een vestige, [Cassimar] zoekt het om zijn vrouw terug tot leven te wekken.',
        categories: ['Anderen'],
        alive: true
    },


];