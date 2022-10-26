let cursor = 0

const scenario = [{
    "name": "박문대",
    "text": "안녕하세요. 이름을 알려주시겠어요?"
  },
  {
    "who": []
},
  {
    "name": "박문대",
    "text": "무엇을 도와드릴까요?"
  },
  {
    "name": "박문대",
    "select": []
  },
  {
    "name": "박문대",
    "text": "다른 것도 도와 드릴까요?"
  },
  {
    "name": "박문대",
    "select2": []
  },{
    "name": "박문대",
    "text": "도움이 되었나요? 좋은 하루 되세요. 다시 시작하고 싶으면 리턴을 눌러 처음 화면으로 돌아갈 수 있습니다."
  }

];


const parse = (i = 0) => {

  const {
    text,
    name,
    image,
    select,
    select2,
    who,

  } = scenario[i];

  //화면 초기화
  document.getElementById('name').style.display = 'none';
  document.getElementById('selector-wrapper').style.display = 'none';
  document.getElementById('selector-wrapper2').style.display = 'none';
  document.getElementById('whoA').style.display = 'none';

  //텍스트 출력
  document.getElementById('text').innerText = text;


  if (!!name) {
    document.getElementById('name').style.display = 'grid';
    document.getElementById('name').innerText = name;
  }

  //선택지 출력
  if (!!select) {
    document.getElementById('selector-wrapper').style.display = 'grid';

  }
  if (!!select2) {
    document.getElementById('selector-wrapper2').style.display = 'grid';

  }

  if (!!who) {
    document.getElementById('whoA').style.display = 'grid';
    document.getElementById("text").innerHTML = '이름이 정말 궁금하네요. 알려주시면 머리 위에 웰컴 배너를 띄워드려요. 그냥 진행하는 것도 가능합니다.';
  }


  if (scenario.length - 1 === cursor) {
    document.getElementById('next').style.display = 'none';
  }
}

parse(cursor);

//이름 묻고 출력하기

let outPutText = '';
function getText(){
  if(outPutText == ''){outPutText += document.getElementById('fname').value;}else{
    if(outPutText != ''){outPutText += document.getElementById('fname').value;}
  }
  if(outPutText == '박문대'){document.getElementById("nameY").innerHTML = `그건 제 이름같은데.. 저랑 이름이 같으신가요?`}else{document.getElementById("nameY").innerHTML = `안녕하세요 ${(outPutText)}님. 도우미 박문대를 찾아주셔서 감사합니다.`}
  document.getElementById('fname').value = '';
}
document.getElementById('btn').addEventListener('click', getText);

//실시간으로 시간 받아오고 시간표 알려주기

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  // let s = today.getSeconds();
  // let t = setTimeout(startTime,1000)

//오전 오후 표시 12시간 체계
  let amOrPm = h >= 12 ? '오후' : '오전';
  h = (h%12)||12;

//숫자앞에 0 붙이기
  h = checkTime(h);
  m = checkTime(m);
  // s = checkTime(s);

  const elem = document.getElementById('text');

  if (amOrPm == '오전' && h == 09 && m < 10) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분이네요.<br>출석체크 하셨나요?`;
  } else if (amOrPm == '오전' && h < 09) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분입니다.<br>일찍 오셨네요.`;
  } else if (amOrPm == '오전' && h == 9 && m >= 10 || amOrPm == '오전' && h == 9 && m < 50) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>1 교시 수업중입니다.`;
  } else if (amOrPm == '오전' && h == 9 && m >= 50 || amOrPm == '오전' && h < 10) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>1 교시 쉬는시간입니다.`;
  } else if (amOrPm == '오전' && h == 10 && m < 50) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>2 교시 수업중입니다.`;
  } else if (amOrPm == '오전' && h == 10 && m >= 50 || amOrPm == '오전' && h < 11) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>2 교시 쉬는시간입니다.`;
  } else if ( amOrPm == '오전' && h == 11 && m < 50) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>3 교시 수업중입니다.`;
  } else if (amOrPm == '오전' && h == 11 && m >= 50 || amOrPm == '오전' && h < 12) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>3 교시 쉬는시간입니다.`;
  } else if (amOrPm == '오후' && h == 12 && m < 50) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>4 교시 수업중입니다.`;
  } else if (amOrPm == '오후' && h == 12 && m >= 50 || amOrPm == '오후' && h == 1 && m <= 40) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>점심시간입니다. 점심 맛있게 먹어요.`;
  } else if (amOrPm == '오후' && h == 1 && m > 40 || amOrPm == '오후' && h == 2 && m < 30){
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>5 교시 수업중입니다.`;
  } else if (amOrPm == '오후' && h == 2 && m >= 30 || amOrPm == '오후' && h == 2 && m < 40){
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>5 교시 쉬는시간입니다.`;
  } else if (amOrPm == '오후' && h == 2 && m >= 40 || amOrPm == '오후' && h == 3 && m < 30){
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>6 교시 수업중입니다.`;
  } else if (amOrPm == '오후' && h == 3 && m >= 30 || amOrPm == '오후' && h == 3 && m < 40){
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>6 교시 쉬는시간입니다.`;
  } else if (amOrPm == '오후' && h == 3 && m >= 40 || amOrPm == '오후' && h == 4 && m < 30){
    elem.innerHTML = `${amOrPm} ${h}시${m}분!<br>마지막 교시네요. 힘내세요.`;
  } else if (amOrPm == '오후' && h >= 4 && m >= 30) {
    elem.innerHTML = `${amOrPm} ${h}시${m}분입니다.<br>얼른 집에 가세요.`;
  } else {
    elem.innerHTML = `현재 시간은 ${amOrPm} ${h}시${m}분입니다.`
  }

  document.getElementById('selector-wrapper').style.display = 'none';


}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//랜덤 메뉴 추천

let randomMenu = ['쌈밥', '사과', '바나나', '베이컨과 계란', '블랙커피', '시리얼', '버섯스프', '치즈버거', '보리굴비', '육전냉면', '우렁강된장', '들깨 수제비'];

function randomItem(randomMenu) {
  return randomMenu[Math.floor(Math.random() * randomMenu.length)];
}

function randomRecomman() {
  document.getElementById("text").innerHTML = `${randomItem(randomMenu)}, 어때요? 맛있을것 같지 않나요? <form><input type="button" value="1.응. 맛있을것같네." onclick="parse(++cursor)"></form><form><input type="button" value="2. 다른건 없을까?" onclick="randomRecomman()"></form>`;
  document.getElementById('selector-wrapper').style.display = 'none';
}

//못만든 기능 움직이는 에러 배경으로 대체하기

function er() {document.getElementById('selector-wrapper').style.display = 'none';
document.getElementById('next').style.display = 'none';
document.getElementById('name').style.display = 'none';
document.getElementById('whole-wrapper').style.backgroundImage = "url('./img/error.png')";
document.body.style.backgroundImage = "url('./img/error.gif')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";}

function log() {
  document.getElementById("text").innerHTML = `Error!! 대화 로그를 읽을 수 없습니다.`
  er();
}

function save() {
  document.getElementById("text").innerHTML = `Error!! 저장할 수 없습니다.`
  er();
}

function load() {
  document.getElementById("text").innerHTML = `Error!! 로드할 수 없습니다.`
  er();
}

//혼자서 하는 가위바위보

let array3 = ['전 가위 냈어요<img src="./img/scissors.png" style="float:right;">', '가위 입니다<img src="./img/scissors.png" style="float:right;">', '이건 보자기를 자르는 가위죠<img src="./img/scissors.png" style="float:right;">', '바위를 내보겠습니다<img src="./img/rock.png" style="float:right;">', '제 주먹 보이시나요?<img src="./img/rock.png" style="float:right;">', '주먹으로 이기겠습니다<img src="./img/rock.png" style="float:right;">', '보, 제가 이겼나요?<img src="./img/paper.png" style="float:right;">', '보자기를 냈습니다<img src="./img/paper.png" style="float:right;">', '보!<img src="./img/paper.png" style="float:right;">'];

function randomGame(array3) {
  return array3[Math.floor(Math.random() * array3.length)];
}

function whoAreYou() {
  document.getElementById("text").innerHTML = `${randomItem(array3)}, <form><input type="button" value="1.다시 해! 가위, 바위, 보!" onclick="whoAreYou()"></form><form><input type="button" value="2. 이제 그만 할래" onclick="parse(++cursor)"></form>`
  document.getElementById('selector-wrapper').style.display = 'none';
}

//선택지 한번 더 주기

function selecRe(){
  document.getElementById('selector-wrapper').style.display = 'grid';
  document.getElementById('selector-wrapper2').style.display = 'none';
}
