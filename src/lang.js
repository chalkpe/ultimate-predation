const data = {
  en: {
    title: 'Ultimate Predation',
    reset: 'Reset',
    prev: 'Prev',
    next: 'Next',
    marker: 'Marker',
    enemy: 'Enemy',
    garuda: 'Garuda',
    garuda_wicked_wheel: 'Wicked Wheel',
    garuda_wicked_tornado: 'Wicked Tornado',
    ifrit: 'Ifrit',
    ifrit_crimson_cyclone: 'Crimson Cyclone',
    titan: 'Titan',
    titan_landslide: 'Landslide',
    ultima: 'The Ultima Weapon',
    ultima_ceruleum_vent: 'Ceruleum Vent'
  },

  ko: {
    title: '궁극의 추격 환상',
    reset: '리셋',
    prev: '이전', 
    next: '다음',
    marker: '지면 표식',
    enemy: '적',
    garuda: '가루다',
    garuda_wicked_wheel: '마녀의 수레바퀴',
    garuda_wicked_tornado: '마녀의 회오리',
    ifrit: '이프리트',
    ifrit_crimson_cyclone: '진홍 회오리',
    titan: '타이탄',
    titan_landslide: '산사태',
    ultima: '알테마 웨폰',
    ultima_ceruleum_vent: '청린 방출'
  },

  ja: {
    title: '追撃の究極幻想',
    reset: 'リセット', 
    prev: '前へ', 
    next: '次へ',
    marker: 'マーカー',
    enemy: '敵',
    garuda: 'ガルーダ',
    garuda_wicked_wheel: 'ウィケッドホイール',
    garuda_wicked_tornado: 'ウィケッドトルネード',
    ifrit: 'イフリート',
    ifrit_crimson_cyclone: 'クリムゾンサイクロン',
    titan: 'タイタン',
    titan_landslide: 'ランドスライド',
    ultima: 'アルテマウェポン',
    ultima_ceruleum_vent: 'セルレアムベント'
  }
}

const lang = (key, language = navigator.language.slice(0, 2), defaultLanguage = 'en') =>
  (data[language] && data[language][key]) || data[defaultLanguage][key]

export default lang