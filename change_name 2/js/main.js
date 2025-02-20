const getTurkishNumber = (num) => {
    const json = {
        0: 'sıfır',
        1: 'bir',
        2: 'iki',
        3: 'üç',
        4: 'dört',
        5: 'beş',
        6: 'altı',
        7: 'yedi',
        8: 'sekiz',
        9: 'dokuz',
        10: 'on',
        20: 'yirmi',
        30: 'otuz',
        40: 'kırk',
        50: 'elli',
        60: 'altmış',
        70: 'yetmiş',
        80: 'seksen',
        90: 'doksan',
    }

    //value into json
    if (json.hasOwnProperty(num)) {
        return json[num].toLowerCase();
    }

    else {
        let final = ''
        let firstNum = num - num % 10
        let lastNum = num % 10

        final = json[firstNum] + " " + json[lastNum];
        return final.toLowerCase();
    }

}