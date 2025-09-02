window.onload = function () {

  var k = document.getElementsByClassName("leftmainli")


  for (var i = 0; i < k.length; i++) {
    k[i].classList.add('animate')
  }
  leftmainlichange(0)
  document.getElementsByClassName("fifthmainsecondimg")[0].style.opacity = 1
}

var third_sleep_choose = false
function leftmainlichange(n) {
  document.querySelectorAll('.leftmainli')
    .forEach(li => li.classList.remove('leftliafterclick'));
  document.querySelectorAll('.leftmainli')[n]
    .classList.add('leftliafterclick');
  var k = document.getElementsByClassName("leftmainli")
  k[n].classList.add('clickshake')
  setTimeout(() => {
    k[n].classList.remove("clickshake")
  }, 300)
  changeright(n)
  if (n == 0) {
    emotionBar.reset()
    emotionBar.update()
    emothionline.reset()
    emothionline.update()
    emotionPie.reset()
    emotionPie.update()
    firstrightlichange(1)
    const items = document.querySelectorAll('.rightfirstmainrightli');

    items.forEach(item => {
      const focusEl = item.querySelector('.firstmainsayfocus');
      const mathEl = item.querySelector('.firstmainsaymath');
      const target = parseInt(focusEl.textContent, 10);
      focusEl.textContent = '0';

      animateNumber(focusEl, target, 2500, () => {
        // ✅ 动画结束后加上 fade-in 类
        mathEl.classList.remove('animate');
        // var el = mathEl
        // void el.offsetWidth;
        // el.classList.add('animate');
        // firstrightlichange(0)
      });
    })
  }
  else if (n == 1) {
    emotionChart.reset()
    emotionChart.update()
    playRightSecondAnimations();

  }


  else if (n == 2) {
    var ok = document.getElementById("right")
    ok.style.backgroundColor = "#ffffffe2"
  }
  else if (n == 3) {
    forthResetPage();
  }
  else if (n == 4) {
    var ok = document.getElementById("right")
    ok.style.backgroundColor = "#bc1fff28"
    fifthShowAnimation()
  }


}
function changeright(n) {
  var k = document.getElementsByClassName("right")
  for (var i = 0; i < k.length; i++) {
    k[i].style.display = "none"
    k[i].style.visibility = "visible"
  }
  k[n].style.display = "block"
  k[n].style.visibility = "visible"
  // if (n == 1) {
  //   k[n].style.display = "flex"
  // }
}
function firstrightlichange(n) {
  var k = document.getElementsByClassName('rightfirstmainrightli')
  if (n == 1) {
    for (var i = 0; i < k.length; i++) {
      k[i].classList.add('animate')
    }
  }
  else {
    for (var i = 0; i < k.length; i++) {
      k[i].classList.remove('animate')
      void el.offsetWidth;
    }
  }
}
var bellnum = 0
function changebell() {
  var k = document.getElementById("userupsecond")
  if (bellnum % 2 == 0) {

    k.style.backgroundImage = "url(./src/15.png)"

  }
  else {
    k.style.backgroundImage = "url(./src/13.png)"
  }
  bellnum += 1
}


//数字变化
function animateNumber(element, target, duration = 2500, onComplete = null) {
  let start = 0;
  const stepTime = 15;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
      if (onComplete) onComplete(); // ✅ 动画完成后回调
    }
    element.textContent = Math.floor(start);
  }, stepTime);
}

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.rightfirstmainrightli');

  items.forEach(item => {
    const focusEl = item.querySelector('.firstmainsayfocus');
    const mathEl = item.querySelector('.firstmainsaymath');
    const target = parseInt(focusEl.textContent, 10);
    focusEl.textContent = '0';

    animateNumber(focusEl, target, 2500, () => {
      // ✅ 动画结束后加上 fade-in 类
      mathEl.classList.add('fade-in');
    });
  });
});




const testup = document.getElementById('testup');
const testin = document.getElementById('testin');

['dragenter', 'dragover'].forEach(evt =>
  testin.addEventListener(evt, e => {
    e.preventDefault();
    testup.style.backgroundColor = '#ccc';
  })
);
['dragleave', 'drop'].forEach(evt =>
  testin.addEventListener(evt, () => {
    testup.style.backgroundColor = '';
  })
);


const bar = document.createElement('div');
const nameBox = document.createElement('div');
Object.assign(bar.style, {
  width: 0, height: '6px', background: '#55ff4c',
  position: 'absolute', bottom: 0, left: 0, transition: 'width 1.2s ease-out'
});
Object.assign(nameBox.style, { marginTop: '8px', fontSize: '14px', color: '#333' });
testup.style.position = 'relative';
testup.appendChild(bar);
testup.appendChild(nameBox);

var file_name = ''
function playUpload(filename) {
  bar.style.transition = 'none';
  bar.style.width = 0;
  nameBox.textContent = '';

  bar.offsetHeight;
  bar.style.transition = 'width 1.2s ease-out';
  bar.style.width = '100%';
  setTimeout(() => nameBox.textContent = '已选择：' + filename, 1200);
  file_name = filename
}
function changepage() {
  bar.remove()
  nameBox.remove()
}

testin.addEventListener('drop', e => {
  e.preventDefault();
  testin.files = e.dataTransfer.files;
  if (testin.files[0]) playUpload(testin.files[0].name);
});


var secondmainnum = 0
var secondmain = document.getElementsByClassName("secondmainheadli")
function changesecondmain(n) {
  if (clickfinish) {
    alert("请等待本次数据分析完成后再切换！")
    return
  }
  secondmainnum = n
  document.getElementById("secondresult").style.display = "none"
  const progressDivs = document.querySelectorAll('.secondmainprogress');
  progressDivs.forEach((div, i) => {
    div.innerHTML = '';
    div.style.display = 'none';
    div.classList.remove('animate-rise');
    void div.offsetWidth;
  });
  changepage()
  document.getElementById("testin").value = ""
  var rebtn = document.getElementById("showresultbtn")
  if (rebtn) {
    rebtn.remove();
    // rebtn.removeEventListener('click', () => {
    //   testin.value = ''
    // })
  }
  var a = document.getElementById("secondmainleftsay1")
  var b = document.getElementById("secondmainleftsay2")
  var c = document.getElementById("secondmainleftsay3")
  var d = document.getElementById("secondmainbottomsay")
  for (var i = 0; i < secondmain.length; i++) {
    secondmain[i].style.backgroundColor = "#ffffff00"
  }
  secondmain[n].style.backgroundColor = "#43fff2"
  if (n == 0) {
    a.textContent = "透过对字里行间的行文的分析串联起一个个无声的文字"
    b.textContent = "织成细腻而婉转的笔者的弦外之音"
    c.textContent = "从而剖析出，每一句所蕴含的情绪的意义"
    d.textContent = "请确认上传的是文本数据！"
  }
  else if (n == 1) {
    a.textContent = "计算机……冰冷的机器么，不，它们也有视觉"
    b.textContent = "有着我们给予它们的，关于图片和情绪的记忆"
    c.textContent = "通过这些记忆，再去读懂我们的图片，便能得出其中思绪……"
    d.textContent = "请确认上传的是图像数据！"
  }
  else if (n == 2) {
    a.textContent = "因能量而颤动并向外传送波纹的信息"
    b.textContent = "当计算机学会了这些信息承载的意义"
    c.textContent = "它们也能够以数据分析和数据库为我们去阅读这些频率"
    d.textContent = "请确认上传的是音频数据！"
  }
  else if (n == 3) {
    a.textContent = "我们当然看不到我们悲喜之际的脑电"
    b.textContent = "将其捕捉，交给计算机吧"
    c.textContent = "我们的系统能够很快地给出答案"
    d.textContent = "请确认上传的是脑电相关数据！"
  }
}

//入场动画
function playRightSecondAnimations() {
  const head = document.getElementById('rightsecondhead');
  const main = document.getElementById('rightsecondmain');
  const left = document.getElementById('secondheadleft');
  const user = document.getElementById('user1');
  const mainLeft = document.getElementById('secondmainleft');
  const mainRight = document.getElementById('secondmainright');

  // 移除旧类
  [head, main, left, user, mainLeft, mainRight].forEach(el => {
    el.classList.remove('animate-slide-up', 'animate-from-left', 'animate-from-right', 'animate-slide-down');
    void el.offsetWidth; // 强制重绘以重启动画
  });

  head.classList.add('animate-slide-up');
  main.classList.add('animate-slide-up');
  left.classList.add('animate-from-right');
  user.classList.add('animate-from-left');
  mainLeft.classList.add('animate-slide-down');
  mainRight.classList.add('animate-slide-down');
}
let isupdate = false
function secondvalidateFileFormat(file) {
  const allowedFormats = {
    0: ['txt'], // 文本文件
    1: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'], // 图片文件
    2: ['wav'], // 音频文件
    4: ['bdf'] // 脑电文件
  };

  const fileExtension = file.name.split('.').pop().toLowerCase();
  const allowedExtensions = allowedFormats[secondmainnum];

  if (!allowedExtensions.includes(fileExtension)) {
    return false;
  }
  return true;
}
testin.addEventListener('change', function (event) {
  isupdate = false
  clickfinish = false
  const file = event.target.files[0];
  if (file) {
    if (secondvalidateFileFormat(file)) {
      const file = testin.files[0];
      testup.appendChild(bar);
      testup.appendChild(nameBox);
      if (file) playUpload(file.name);
      // 文件格式正确，控制台打印成功信息
      console.log('文件上传成功，文件名：', file.name);
      isupdate = true
    } else {
      // 文件格式不正确，弹出提示并清空文件输入框
      let requiredFormat;
      switch (secondmainnum) {
        case 0:
          requiredFormat = '文本文件（.txt）';
          break;
        case 1:
          requiredFormat = '图片文件（.jpg, .jpeg, .png, .gif, .bmp）';
          break;
        case 2:
          requiredFormat = '音频文件（.wav）';
          break;
        case 4:
          requiredFormat = '脑电文件（.bdf）';
          break;
        default:
          requiredFormat = '未知文件格式';
      }
      alert(`请正确上传文件格式：${requiredFormat}`);
      // 清空文件输入框
      testin.value = '';
    }
  }
})
function finish() {
  const Text = document.getElementsByClassName('.secondmainprogress')[2].querySelector('.progress-text')
  Text.innerHTML = "已完成分析！"
}
let secondchart
//进度条
var clickfinish = false
document.getElementById("secondmainbutton").addEventListener('click', () => {
  if (!clickfinish) {
    clickfinish = true
    buttoncheck()
  }
  else {
    alert("请勿重复点击！")

  }
})

function buttoncheck() {
  let leftdiv
  if (leftdiv) { leftdiv.remove() }
  let rightdiv
  if (rightdiv) { rightdiv.remove() }
  let secondctx
  if (secondctx) { ctx.remove() }
  let secondcanvas
  if (secondcanvas) { secondcanvas.remove() }
  if (secondchart) { secondchart.destroy() }
  document.getElementById("secondresult").innerHTML = ''
  document.getElementById("secondresult").style.display = "none"

  function showuser() {
    var rebtn = document.getElementById('showresultbtn')
    if (rebtn) {
      rebtn.style.display = "block"
    } else {
      const resultBtn = document.createElement('button');
      resultBtn.id = 'showresultbtn';
      resultBtn.innerText = '显示结果';
      container.appendChild(resultBtn);
    }
    document.querySelectorAll('.secondmainprogress')[2].querySelector('.progress-text').innerHTML = "分析完成！"
    clickfinish = false
  }
  function showrebtn() {
    const resultBtn = document.createElement('button');
    resultBtn.id = 'showresultbtn';
    resultBtn.innerText = '显示结果';
    container.appendChild(resultBtn);
    resultBtn.style.display = "none"
    resultBtn.addEventListener('click', () => {
      document.getElementById("secondresult").style.display = 'flex'
      testin.value = ''
      nameBox.innerHTML = '已落载文件，请重新上传'
    })
  }
  if (file_name === '') {
    alert("请传入文件！！");
    return;
  }
  const new_file = testin.files[0];
  if (!new_file) {
    alert("文件为空！");
    clickfinish = false
    return
  }
  const formData = new FormData();
  // 注意！要和 Flask 的字段名对应
  if (secondmainnum === 0) {
    formData.append("text_file", new_file);
    axios.post('http://localhost:5080/text', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log("Flask 响应：", res.data);
      console.log(res.data.Keras)
      showrebtn()
      showuser()

      //结果内容
      const labels = ["外向型", "神经质", "随和性", "尽责性", "开放性"];
      const redata = [res.data.Keras.Agreeableness, res.data.Keras.Conscientiousness, res.data.Keras.Extraversion, res.data.Keras.Neuroticism, res.data.Keras.Openness]
      console.log(redata)
      // TODO: 在此修改每个维度的概率值（0 ~ 1）
      // 顺序需与 labels 一一对应：外向型、神经质、随和性、尽责性、开放性
      const data = [
        redata[0], // 外向型 Extraversion
        redata[1], // 神经质 Neuroticism
        redata[2], // 随和性 Agreeableness
        redata[3], // 尽责性 Conscientiousness
        redata[4] // 开放性 Openness
      ];
      leftdiv = document.createElement("div")
      leftdiv.id = "secondreleftchart"
      document.getElementById("secondresult").appendChild(leftdiv)
      secondcanvas = document.createElement('canvas')
      secondcanvas.id = "myChart"
      document.getElementById("secondreleftchart").appendChild(secondcanvas)
      // --- 以下为图表配置，一般不需要改动 ---
      secondctx = document.getElementById('myChart').getContext('2d');
      secondchart = new Chart(secondctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: '人格特质概率值',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(75, 192, 192)',
              'rgba(255, 206, 86)',
              'rgba(153, 102, 255)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              min: 0,
              max: 1,
              ticks: {
                stepSize: 0.1
              },
              title: {
                display: true,
                text: '占比概率值'
              }
            },
            x: {
              title: {
                display: true,
                text: '人格维度'
              }
            }
          }
        }
      });
      rightdiv = document.createElement("div")
      rightdiv.id = "secondreright"
      document.getElementById("secondresult").appendChild(rightdiv)
      var inner = [res.data.Keras.Extraversion_probability, res.data.Keras.Neuroticism_probability, res.data.Keras.Agreeableness_probability, res.data.Keras.Conscientiousness_probability, res.data.Keras.Openness_probability]
      inner.forEach((innersay, index) => {
        inner[index] = (innersay === "是 (High)") ? true : false
      })
      console.log(inner)
      const title = document.createElement("h2");
      title.textContent = "该文字的作者：";
      rightdiv.appendChild(title);

      // 创建一个列表来显示每个维度的结果
      const list = document.createElement("ul");
      rightdiv.appendChild(list);

      // 遍历每个维度，生成列表项并添加到列表中
      labels.forEach((label, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${label}: ${inner[index] ? "可能性高" : "可能性低"}`;
        list.appendChild(listItem);
      });


    }).catch(err => {
      clickfinish = false
      console.error("请求出错：", err);
      alert("服务器请求出错，请刷新重试！")
    });
  }
  else if (secondmainnum === 2) {
    formData.append("sound_file", new_file);
    axios.post('http://127.0.0.1:5080/sound', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res.data)
      showrebtn()
      showuser()
      const container = document.getElementById("secondresult");
      // 创建总容器
      const voiceBox = document.createElement("div");
      voiceBox.id = "secondvoiceresult";
      // 标题
      const title = document.createElement("div");
      title.className = "second-title";
      title.innerText = "识别的结果为：";
      // 卡牌容器
      const cardsBox = document.createElement("div");
      cardsBox.className = "second-cards";
      const emotions = ["平静", "高兴", "悲伤", "愤怒", "恐惧", "厌恶", "惊讶"];
      emotions.forEach(emotion => {
        const card = document.createElement("div");
        card.className = "second-card";
        card.dataset.emotion = emotion;
        card.innerText = emotion;
        cardsBox.appendChild(card);
      });
      // 最终结果
      const finalResult = document.createElement("div");
      finalResult.id = "second-final-result";
      // 组装结构
      voiceBox.appendChild(title);
      voiceBox.appendChild(cardsBox);
      voiceBox.appendChild(finalResult);
      container.appendChild(voiceBox);
      // 开始动画
      const cards = cardsBox.querySelectorAll(".second-card");
      cards.forEach(card => {
        card.style.animationPlayState = "running";
      });
      // 动画结束后显示最终结果
      setTimeout(() => {
        cardsBox.style.display = "none";
        finalResult.innerText = res.data;
        finalResult.className = "color-" + res.data;
        finalResult.style.display = "block";
      }, 0);
    }).catch(err => {
      clickfinish = false
      console.error("请求出错：", err);
      alert("服务器请求出错，请刷新重试！")
    })
  }

  const progressTitles = ['读取数据', '匹配数据库', '大模型分析'];
  const waitingTexts = ['等待读取', '等待匹配', '等待分析'];
  const runningTexts = ['正在读取', '正在匹配', '正在分析'];
  const doneTexts = ['完成读取', '完成匹配', '正在分析...'];
  const container = document.getElementById('secondmainright');
  const progressDivs = document.querySelectorAll('.secondmainprogress');

  // 清除旧内容并设置初始状态
  progressDivs.forEach((div, i) => {
    div.innerHTML = '';
    div.style.display = 'none';
    div.classList.remove('animate-rise');
    void div.offsetWidth;
  });

  const oldBtn = document.getElementById('showresultbtn');
  if (oldBtn) {
    oldBtn.remove();
    //  oldBtn.removeEventListener('click', () => {
    //   testin.value = ''
    // })
  }

  // 添加滑入动画（0.2s 间隔）
  progressDivs.forEach((div, i) => {
    setTimeout(() => {
      div.style.display = 'flex';
      div.classList.add('animate-rise');

      div.style.flexDirection = 'column';
      div.style.alignItems = 'center';

      const title = document.createElement('div');
      title.className = 'progress-title';
      title.innerText = progressTitles[i];

      const barContainer = document.createElement('div');
      barContainer.style.width = '100%';
      barContainer.style.height = '40px';
      barContainer.style.backgroundColor = '#eee';
      barContainer.style.borderRadius = '10px';
      barContainer.style.position = 'relative';
      barContainer.style.overflow = 'visible';

      const bar = document.createElement('div');
      bar.className = 'progress-bar-fill';
      bar.style.height = '100%';
      bar.style.width = '0%';
      bar.style.backgroundColor = '#55ff4c';
      bar.style.transition = 'width 2.5s ease';

      const statusText = document.createElement('div');
      statusText.className = 'progress-text';
      statusText.innerText = waitingTexts[i];

      barContainer.appendChild(bar);
      barContainer.appendChild(statusText);

      div.appendChild(title);
      div.appendChild(barContainer);
    }, i * 100); // stagger 200ms
  });

  // 等待全部滑入后启动进度条动画
  setTimeout(() => {
    function animateBar(i) {
      if (i >= progressDivs.length) {
        return;
      }
      const bar = progressDivs[i].querySelector('.progress-bar-fill');
      const text = progressDivs[i].querySelector('.progress-text');
      text.innerText = runningTexts[i];
      bar.offsetHeight;
      bar.style.width = '100%';
      setTimeout(() => {

        text.innerText = doneTexts[i];
        setTimeout(() => animateBar(i + 1), 100);

      }, 250);
    }
    animateBar(0);
  }, 3 * 200 + 200); // 滑入完再开始动画
}



//第三页
function longdaygo() {
  alert("该部分还待优化/嵌入/引进，敬请期待！")
}
function thirdShowPage(pageId) {
  const pages = [
    "thirdmainmenu",
    "thirdinteractivepage",
    "thirdrelaxpage",
    "thirdmeditationpage",
    "thirdsleeppage"
  ];
  if (pageId == "thirdsleeppage" && third_sleep_choose == false) {
    alert("请选择你要去往的功能！")
    return
  }
  pages.forEach(id => {
    document.getElementById(id).style.display = (id === pageId) ? "flex" : "none";
  });
  if (pageId == "thirdmainmenu") {
    document.getElementById("thirdsleep").style.backgroundImage = "none"
    third_sleep_choose = false
  }

}

// 默认显示主页面
thirdShowPage("thirdmainmenu");

// 自动为每个功能格子插入四角
window.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".thirdbox");
  boxes.forEach(box => {
    ["topleft", "topright", "bottomleft", "bottomright"].forEach(pos => {
      const div = document.createElement("div");
      div.classList.add("thirdcorner", pos);
      box.appendChild(div);
    });
  });
});

//交互式情绪调节
/*以下是全屏的 */
function isenter(e) {
  if (e.key === "Enter") {
    console.log("回车键已点下！")
    // thirdSendMessage()
    hereweare()
  }
}
// 生成鉴权签名
function generateSignature(method, host, path, APPID, APISecret) {
  const now = new Date();
  const date = now.toUTCString();
  const signatureOrigin = `host: ${host}\ndate: ${date}\n${method} ${path} HTTP/1.1`;
  const signatureSha = crypto.createHmac('sha256', APISecret).update(signatureOrigin).digest('base64');
  const authorizationOrigin = `hmac username="${APPID}", algorithm="hmac-sha256", headers="host date request-line", signature="${signatureSha}"`;
  const authorization = btoa(authorizationOrigin);
  return { authorization, date };
}

// 讯飞星火API配置
//——————————————————————————————————————————————————————————————————————————————————————————————————————————————————-
const XUNFEI_API_URL = 'https://spark-api.xf-yun.com/v1/chat';
const APPID = 'a5159c91';
const APIKey = '77303d76497a95d4cfad515666aebe74';
const APISecret = 'kLCsxOpEfaZxCAiRmmmi:zAAQSsnkzQgVlpJhyIva';
const APIPassword = "kLCsxOpEfaZxCAiRmmmi:zAAQSsnkzQgVlpJhyIva"

function herewearegogogo() {
  var aiResponse = ""
  const input = document.getElementById("thirdchatinput");
  const chatBody = document.getElementById("thirdchatbody");
  let text = input.value.trim();
  text = input.value.trim()
  if (!text) {
    alert("请输入信息！")
    return
  }

  // 添加用户消息
  const userMsg = document.createElement("div");
  userMsg.style.alignSelf = "flex-end";
  userMsg.style.display = "flex";
  userMsg.style.alignItems = "center";
  userMsg.innerHTML = `
    <div style="background-color: #6c63ff; color: white; border-radius: 10px; padding: 0.5vw 1vw; margin-right: 0.8vw;">${text}</div>
    <img src="./src/12.png" style="width: 3vw; height: 3vw; border-radius: 50%;">
  `;
  input.value = "";
  chatBody.appendChild(userMsg);

  // 调用讯飞星火API
  fetch('http://localhost:3050/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      aiResponse = data.choices[0].message.content;
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // 添加AI回复
  const aiMsg = document.createElement("div");
  aiMsg.style.alignSelf = "flex-start";
  aiMsg.style.display = "flex";
  aiMsg.style.alignItems = "center";
  aiMsg.innerHTML = `
    <img src="./src/42.png" style="width: 3vw; height: 3vw; border-radius: 50%; margin-right: 0.8vw;">
    <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.5vw 1vw;">
      ${aiResponse}
    </div>
  `;

  chatBody.scrollTop = chatBody.scrollHeight;
}

function toxunfei(text) {
  return new Promise((resolve, reject) => {
    axios.post('http://127.0.0.1:3080/chat', {
      message: text
    }).then(res => {
      console.log(res.data);
      const aiResponse = res.data.response;
      const aiResponding = res.data.reasoning;
      resolve({ sikao: aiResponding, huida: aiResponse });
    }).catch(err => {
      console.error(err);
      reject(err);
    });
  });
}

async function hereweare() {
  const input = document.getElementById("thirdchatinput");
  const chatBody = document.getElementById("thirdchatbody");

  let text = input.value.trim();
  if (!text) {
    alert("请输入信息！");
    return;
  }

  // 添加用户消息
  const userMsg = document.createElement("div");
  userMsg.style.alignSelf = "flex-end";
  userMsg.style.display = "flex";
  userMsg.style.alignItems = "center";
  userMsg.innerHTML = `
    <div style="background-color: #6c63ff; color: white; border-radius: 10px; padding: 0.5vw 1vw; margin-right: 0.8vw;">${text}</div>
    <img src="./src/12.png" style="width: 3vw; height: 3vw; border-radius: 50%;">
  `;
  chatBody.appendChild(userMsg);

  // 添加AI思考的占位消息
  setTimeout(() => {
    const aiMsg3 = document.createElement("div");
    aiMsg3.style.alignSelf = "flex-start";
    aiMsg3.style.display = "flex";
    aiMsg3.style.alignItems = "center";
    aiMsg3.innerHTML = `
    <img src="./src/42.png" style="width: 3vw; height: 3vw; border-radius: 50%; margin-right: 0.8vw;">
    <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.5vw 1vw;">
      收到！我正在思考...
    </div>
  `;
    chatBody.appendChild(aiMsg3);
  }, 889);


  try {
    // 等待API响应
    const ans = await toxunfei(text);
    const aiResponse = ans.huida;
    const aiResponding = ans.sikao;

    // 添加AI回复
    const aiMsg = document.createElement("div");
    aiMsg.style.alignSelf = "flex-start";
    aiMsg.style.display = "flex";
    aiMsg.style.alignItems = "center";
    aiMsg.innerHTML = `
      <img src="./src/42.png" style="width: 3vw; height: 3vw; border-radius: 50%; margin-right: 0.8vw;">
      <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.5vw 1vw;">
        ${aiResponse}
      </div>
    `;


    // 添加AI思考过程
    const aiMsg2 = document.createElement("div");
    aiMsg2.style.alignSelf = "flex-start";
    aiMsg2.style.display = "flex";
    aiMsg2.style.alignItems = "center";
    aiMsg2.innerHTML = `
      <img src="./src/42.png" style="width: 3vw; height: 3vw; border-radius: 50%; margin-right: 0.8vw;">
      <div style="background-color: #99acffff; border-radius: 10px; padding: 0.5vw 1vw;">
        ${"（思考过程）" + aiResponding}
      </div>
    `;
    chatBody.appendChild(aiMsg2);
    chatBody.appendChild(aiMsg);

    // 清空输入框并滚动到最底部
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  } catch (err) {
    console.error(err);
    alert("发生错误，请稍后再试！");
  }
}


async function thirdSendMessage() {
  var aire = ""
  const input = document.getElementById("thirdchatinput");
  const chatBody = document.getElementById("thirdchatbody");
  const text = input.value.trim();

  if (!text) {
    alert("请输入信息！");
    return;
  }

  // 添加用户消息
  const userMsg = document.createElement("div");
  userMsg.style.alignSelf = "flex-end";
  userMsg.style.display = "flex";
  userMsg.style.alignItems = "center";
  userMsg.innerHTML = `
    <div style="background-color: #6c63ff; color: white; border-radius: 10px; padding: 0.5vw 1vw; margin-right: 0.8vw;">${text}</div>
    <img src="./src/12.png" style="width: 3vw; height: 3vw; border-radius: 50%;">
  `;
  chatBody.appendChild(userMsg);

  try {// 添加AI回复
    const aiMsg = document.createElement("div");
    aiMsg.style.alignSelf = "flex-start";
    aiMsg.style.display = "flex";
    aiMsg.style.alignItems = "center";
    const ans = await toxunfei(text);
    aire = ans.huida
    aiMsg.innerHTML = `
    <img src="./src/42.png" style="width: 3vw; height: 3vw; border-radius: 50%; margin-right: 0.8vw;">
    <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.5vw 1vw;">
      ${aire}
    </div>
  `;
    chatBody.appendChild(aiMsg)
  } catch (err) {
    const aiMsg2 = document.createElement("div");
    aiMsg2.style.alignSelf = "flex-start";
    aiMsg2.style.display = "flex";
    aiMsg2.style.alignItems = "center";

    aiMsg2.innerHTML = `
    <img src="./src/42.png" style="width: 3vw; height: 3vw; border-radius: 50%; margin-right: 0.8vw;">
    <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.5vw 1vw;">
      出现网络错误，请重试！
    </div>
  `;
    chatBody.appendChild(aiMsg2)

  }

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————-


/*以下是小窗的 */

// 获取 DOM 元素
const input = document.querySelector('#thirdfirsttext input');
const sendBtn = document.querySelector('#thirdfirsttext button');
const chatBox = document.querySelector('#thirdinteractivepreview > div:nth-child(2)');

// 启用输入框和按钮
input.disabled = false;
sendBtn.disabled = false;

// 绑定发送函数
async function sendMessage() {
  const text = input.value.trim();
  if (!text) {
    alert("请输入信息！")
    return;
  }

  // 创建用户气泡
  const userBubble = document.createElement('div');
  userBubble.style.alignSelf = 'flex-end';
  userBubble.style.display = 'flex';
  userBubble.style.alignItems = 'center';
  userBubble.innerHTML = `
      <div style="background-color: #6c63ff; color: white; border-radius: 10px; padding: 0.3vw 0.6vw; margin-right: 0.5vw;">
        ${text}
      </div>
      <img src="./src/12.png" style="width: 1.5vw; height: 1.5vw; border-radius: 50%;">

    `;

  chatBox.appendChild(userBubble);
  input.value = '';
  setTimeout(() => {
    const aiBubble3 = document.createElement('div');
    aiBubble3.style.alignSelf = 'flex-start';
    aiBubble3.style.display = 'flex';
    aiBubble3.style.alignItems = 'center';
    aiBubble3.innerHTML = `
        <img src="./src/42.png" style="width: 1.5vw; height: 1.5vw; border-radius: 50%; margin-right: 0.5vw;">
        <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.3vw 0.6vw;">
          收到：“${text}”，我会为你解忧~正在思考中..
        </div>
      `;
    chatBox.appendChild(aiBubble3);
  }, 888);
  try {
    const aiBubble = document.createElement('div');
    aiBubble.style.alignSelf = 'flex-start';
    aiBubble.style.display = 'flex';
    aiBubble.style.alignItems = 'center';
    var aire = ""
    const ans = await toxunfei(text);
    aire = ans.huida
    aiBubble.innerHTML = `
        <img src="./src/42.png" style="width: 1.5vw; height: 1.5vw; border-radius: 50%; margin-right: 0.5vw;">
        <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.3vw 0.6vw;">
          收到：“${aire}”，我会为你解忧。
        </div>
      `;
    chatBox.appendChild(aiBubble);
    chatBox.scrollTop = chatBox.scrollHeight; // 滚动到底部
  } catch (err) {
    const aiBubble2 = document.createElement('div');
    aiBubble2.style.alignSelf = 'flex-start';
    aiBubble2.style.display = 'flex';
    aiBubble2.style.alignItems = 'center';
    aiBubble2.innerHTML = `
        <img src="./src/42.png" style="width: 1.5vw; height: 1.5vw; border-radius: 50%; margin-right: 0.5vw;">
        <div style="background-color: #e0e0e0; border-radius: 10px; padding: 0.3vw 0.6vw;">
          出现网络错误！请您重试
        </div>
      `;
    chatBox.appendChild(aiBubble2);
    chatBox.scrollTop = chatBox.scrollHeight; // 滚动到底部
  }


}

// 事件监听
sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});




/*睡眠 */
document.addEventListener('DOMContentLoaded', function () {
  // 小窗口模式按钮事件
  var ck = document.getElementById("thirdsleep")
  document.getElementById('third-focus-sleep').addEventListener('click', function () {
    document.querySelector('.third-small-mode').style.display = 'none';
    document.querySelector('.third-focus-sleep-screen').style.display = 'block';
    ck.style.backgroundImage = "url(./src/44.png)"
    third_sleep_choose = true
  });

  document.getElementById('third-nap').addEventListener('click', function () {
    document.querySelector('.third-small-mode').style.display = 'none';
    document.querySelector('.third-nap-screen').style.display = 'block';
    ck.style.backgroundImage = "url(./src/44.png)"
    third_sleep_choose = true
  });

  document.getElementById('third-amsr').addEventListener('click', function () {
    document.querySelector('.third-small-mode').style.display = 'none';
    document.querySelector('.third-amsr-screen').style.display = 'block';
    ck.style.backgroundImage = "url(./src/44.png)"
    third_sleep_choose = true
  });

  document.getElementById('third-summary').addEventListener('click', function () {
    document.querySelector('.third-small-mode').style.display = 'none';
    document.querySelector('.third-summary-screen').style.display = 'block';
    ck.style.backgroundImage = "url(./src/44.png)"
    third_sleep_choose = true
    initializeSleepChart();
  });

  // 返回按钮事件
  const backButtons = document.querySelectorAll('.third-back-button');
  backButtons.forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.third-fullscreen').forEach(screen => {
        screen.style.display = 'none';
      });
      document.querySelector('.third-small-mode').style.display = 'block';
    });
  });

  // 专注睡眠功能
  const timerDisplay = document.querySelector('.third-timer-display');
  const startButton = document.getElementById('third-start-timer');
  const stopButton = document.getElementById('third-stop-timer');
  const submitButton = document.getElementById('third-submit-timer');
  const progressBar = document.getElementById('third-sleep-progress');
  const ratingDisplay = document.querySelector('.third-rating-display');

  let timer = null;
  let seconds = 0;
  let isRunning = false;

  startButton.addEventListener('click', function () {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(function () {
        seconds++;
        updateTimerDisplay();
      }, 1000);
    }
  });

  stopButton.addEventListener('click', function () {
    if (isRunning) {
      clearInterval(timer);
      isRunning = false;
    }
  });

  submitButton.addEventListener('click', function () {
    if (!isRunning) {
      progressBar.style.height = '0%';
      // 模拟评级 (这里随机选择评级)
      const ratings = ['失眠', '睡眠较差', '平静的睡眠', '睡眠较好', '美梦'];
      const ratingIndex = Math.floor(Math.random() * ratings.length);
      const rating = ratings[ratingIndex];

      // 计算进度条高度 (0-100%)
      const progressHeight = (ratingIndex + 1) * 20;

      // 设置进度条动画
      progressBar.style.height = `${progressHeight}%`;

      // 更新评级显示
      ratingDisplay.textContent = `评级: ${rating}`;

      // 2.5秒后重置计时器
      setTimeout(function () {
        seconds = 0;
        updateTimerDisplay();

        ratingDisplay.textContent = '评级: ' + rating;
      }, 2500);
    }
  });

  function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    timerDisplay.textContent =
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // 略微小憩功能
  const napSlider = document.getElementById('third-nap-slider');
  const napSliderHandle = document.querySelector('.third-nap-slider-handle');
  const napTimerDisplay = document.querySelector('.third-nap-timer-display');
  const startNapButton = document.getElementById('third-start-nap');

  let napMinutes = 30;
  let isDragging = false;
  let napTimer = null;

  // 初始化滑块位置
  updateSliderPosition();

  napSlider.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', endDrag);

  napSlider.addEventListener('touchstart', startDrag);
  document.addEventListener('touchmove', drag);
  document.addEventListener('touchend', endDrag);

  function startDrag(e) {
    isDragging = true;
    updateSlider(e);
    e.preventDefault();
  }

  function drag(e) {
    if (isDragging) {
      updateSlider(e);
      e.preventDefault();
    }
  }

  function endDrag() {
    isDragging = false;
  }

  function updateSlider(e) {
    const sliderRect = napSlider.getBoundingClientRect();
    let clientX;

    if (e.type.includes('touch')) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    let position = (clientX - sliderRect.left) / sliderRect.width;
    position = Math.max(0, Math.min(1, position));

    // 计算分钟数 (5-120分钟)
    napMinutes = Math.round(5 + position * 115);

    updateSliderPosition();
    updateNapTimerDisplay();
  }

  function updateSliderPosition() {
    const position = (napMinutes - 5) / 115;
    const sliderWidth = napSlider.offsetWidth;
    const handleWidth = napSliderHandle.offsetWidth;
    const maxLeft = sliderWidth - handleWidth;

    napSliderHandle.style.left = `${position * maxLeft}px`;
  }

  function updateNapTimerDisplay() {
    napTimerDisplay.textContent = `${napMinutes} 分钟`;
  }

  startNapButton.addEventListener('click', function () {
    if (!napTimer) {
      let remainingSeconds = napMinutes * 60;

      napTimer = setInterval(function () {
        remainingSeconds--;

        if (remainingSeconds <= 0) {
          clearInterval(napTimer);
          napTimer = null;
          alert('小憩结束');
          napMinutes = 30;
          updateSliderPosition();
          updateNapTimerDisplay();
        } else {
          const minutes = Math.floor(remainingSeconds / 60);
          const seconds = remainingSeconds % 60;
          napTimerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
      }, 1000);
    }
  });

  // AMSR功能
  const playPauseButton = document.getElementById('third-play-pause');
  const progress = document.querySelector('.third-amsr-progress');

  let isPlaying = false;

  playPauseButton.addEventListener('click', function () {
    isPlaying = !isPlaying;
    playPauseButton.textContent = isPlaying ? '暂停' : '播放';

    // 模拟进度条
    if (isPlaying) {
      let progressWidth = 0;
      const progressInterval = setInterval(function () {
        if (progressWidth >= 100 || !isPlaying) {
          clearInterval(progressInterval);
          if (progressWidth >= 100) {
            isPlaying = false;
            playPauseButton.textContent = '播放';
            progress.style.width = '0%';
          }
        } else {
          progressWidth += 0.5;
          progress.style.width = `${progressWidth}%`;
        }
      }, 100);
    }
  });

  // 睡眠总结图表
  function initializeSleepChart() {
    const ctx = document.getElementById('third-sleep-chart').getContext('2d');

    // 模拟睡眠数据
    const sleepStages = ['清醒', 'REM', '浅睡', '深睡'];
    const hours = Array.from({ length: 8 }, (_, i) => `${i}时`);

    // 随机生成睡眠数据
    const datasets = sleepStages.map((stage, i) => {
      const data = hours.map(() => Math.floor(Math.random() * 30) + 10);
      const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

      return {
        label: stage,
        data: data,
        backgroundColor: colors[i],
        borderColor: colors[i],
        borderWidth: 1,
        fill: false
      };
    });

    const whatchart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: hours,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: '分钟'
            }
          },
          x: {
            title: {
              display: true,
              text: '时间'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: '睡眠周期分析',
            font: {
              size: 18
            }
          },
          legend: {
            position: 'top'
          }
        }
      }
    });
    whatchart.reset()
    whatchart.update()
  }
});


//第三页睡眠
// 全局变量
let thirdsitMeditationStarted = false;
let thirdsitRemainingTime = 300; // 5分钟（秒）
let thirdsitTotalTime = 300;     // 总时间（秒）
const thirdsitMinTime = 300;     // 5分钟
const thirdsitMaxTime = 7200;    // 120分钟
let thirdsitTimer = null;
let thirdsitFeatures = [];

// DOM 元素
const thirdsitTimerDisplay = document.getElementById('thirdsittimerdisplay');
const thirdsitProgressBar = document.getElementById('thirdsitprogressbar');
const thirdsitMainArea = document.getElementById('thirdsitmainarea');

// 初始化
updateTimerDisplay();
const thirdsitNotification = document.getElementById('thirdsitnotification');

// 添加按钮事件监听器
document.getElementById('thirdsitwhitenoise').addEventListener('click', addWhiteNoise);
document.getElementById('thirdsitwaterreminder').addEventListener('click', addWaterReminder);
document.getElementById('thirdsitmeditationmaterial').addEventListener('click', addMeditationMaterial);
document.getElementById('thirdsitaddfive').addEventListener('click', addFiveMinutes);
document.getElementById('thirdsitsubfive').addEventListener('click', subtractFiveMinutes);

// 添加全局点击事件（用于静坐状态下的操作拦截）
document.addEventListener('click', handleGlobalClick);
// function thirdsitInit() {
//   updateTimerDisplay();

//   // 添加按钮事件监听器
//   document.getElementById('thirdsitwhitenoise').addEventListener('click', addWhiteNoise);
//   document.getElementById('thirdsitwaterreminder').addEventListener('click', addWaterReminder);
//   document.getElementById('thirdsitmeditationmaterial').addEventListener('click', addMeditationMaterial);
//   document.getElementById('thirdsitaddfive').addEventListener('click', addFiveMinutes);
//   document.getElementById('thirdsitsubfive').addEventListener('click', subtractFiveMinutes);

//   // 添加全局点击事件（用于静坐状态下的操作拦截）
//   document.addEventListener('click', handleGlobalClick);
// }

// 更新倒计时显示

function showNotification(message) {
  thirdsitNotification.textContent = message;
  thirdsitNotification.style.display = 'block';
  setTimeout(() => {
    thirdsitNotification.style.display = 'none';
  }, 3000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(thirdsitRemainingTime / 60);
  const seconds = thirdsitRemainingTime % 60;
  thirdsitTimerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // 更新进度条（基于总时间）
  const progressPercentage = 100 - (thirdsitRemainingTime / thirdsitTotalTime * 100);
  thirdsitProgressBar.style.width = `${progressPercentage}%`;
}

// 添加白噪音模块
var voice = false
function addWhiteNoise() {
  if (thirdsitMeditationStarted) return;

  const featureDiv = document.createElement('div');
  featureDiv.className = 'thirdsitfeature';
  if (voice == false) {
    featureDiv.textContent = '白噪音已开启';
    voice = true
  }
  else {
    featureDiv.textContent = '白噪音已关闭'
    voice = false
  }
  thirdsitMainArea.appendChild(featureDiv);
  thirdsitFeatures.push('whitenoise');

  // 滚动到底部
  thirdsitMainArea.scrollTop = thirdsitMainArea.scrollHeight;
}

// 添加喝水提醒
var drink = false
function addWaterReminder() {
  if (thirdsitMeditationStarted) return;

  const featureDiv = document.createElement('div');
  featureDiv.className = 'thirdsitfeature';
  if (drink == false) {
    featureDiv.textContent = '喝水提醒已设置';
    drink = true
  }
  else {
    featureDiv.textContent = '喝水提醒取消';
    drink = false
  }

  thirdsitMainArea.appendChild(featureDiv);
  thirdsitFeatures.push('waterreminder');

  thirdsitMainArea.scrollTop = thirdsitMainArea.scrollHeight;
}

// 添加冥想材料
var think = 1
function addMeditationMaterial() {
  if (thirdsitMeditationStarted) return;

  const featureDiv = document.createElement('div');
  featureDiv.className = 'thirdsitfeature';
  featureDiv.textContent = '冥想材料已加载' + think + '份';
  think += 1
  thirdsitMainArea.appendChild(featureDiv);
  thirdsitFeatures.push('meditationmaterial');

  thirdsitMainArea.scrollTop = thirdsitMainArea.scrollHeight;
}

// 增加五分钟
function addFiveMinutes() {
  if (thirdsitMeditationStarted) return;

  if (thirdsitTotalTime + 300 <= thirdsitMaxTime) {
    thirdsitTotalTime += 300;
    thirdsitRemainingTime += 300;
    updateTimerDisplay();
    showNotification('已增加5分钟');
  } else {
    showNotification('已达到最大时间（120分钟）');
  }
}

// 减少五分钟
function subtractFiveMinutes() {
  if (thirdsitMeditationStarted) return;

  if (thirdsitTotalTime - 300 >= thirdsitMinTime) {
    thirdsitTotalTime -= 300;
    thirdsitRemainingTime -= 300;
    updateTimerDisplay();
    showNotification('已减少5分钟');
  } else {
    showNotification('已达到最小时间（5分钟）');
  }
}

// 全局点击处理
function handleGlobalClick(e) {
  if (!thirdsitMeditationStarted) return;

  // 阻止所有按钮操作
  if (e.target.classList.contains('thirdsitbtn')) {
    e.preventDefault();
    e.stopPropagation();
    showNotification('静坐进行中，请勿操作');
  }
}

// 开始静坐函数（供外部调用）
function thirdsitStartMeditation() {
  if (thirdsitMeditationStarted) {
    // 如果已经在静坐中，询问是否结束
    if (confirm('是否立即结束静坐？')) {
      thirdsitStopMeditation();
      showNotification('静坐已结束');
    }
    return;
  }

  if (thirdsitRemainingTime <= 0) {
    showNotification('请设置静坐时间');
    return;
  }

  thirdsitMeditationStarted = true;
  showNotification('静坐开始，请专注');

  // 开始倒计时
  thirdsitTimer = setInterval(() => {
    thirdsitRemainingTime--;
    updateTimerDisplay();

    if (thirdsitRemainingTime <= 0) {
      thirdsitStopMeditation();
      showNotification('静坐时间结束！');
    }
  }, 1000);
}

// 停止静坐
function thirdsitStopMeditation() {
  clearInterval(thirdsitTimer);
  thirdsitMeditationStarted = false;

  // 重置时间
  thirdsitRemainingTime = thirdsitMinTime;
  thirdsitTotalTime = thirdsitMinTime;
  updateTimerDisplay();

  // 清空功能模块
  thirdsitMainArea.innerHTML = '';
  thirdsitFeatures = [];

  // 添加初始提示
  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = 'thirdsitfeature';
  welcomeDiv.innerHTML = '<span class="thirdsitfeatureicon">🕊️</span>静坐已完成';
  thirdsitMainArea.appendChild(welcomeDiv);

  const tipDiv = document.createElement('div');
  tipDiv.className = 'thirdsitfeature';
  tipDiv.innerHTML = '<span class="thirdsitfeatureicon">💡</span>请从左侧选择功能开始新的静坐';
  thirdsitMainArea.appendChild(tipDiv);
}


//第三页游戏

// // DOM元素
// const gameContainer = document.getElementById('thirdrelax');
// const startScreen = document.getElementById('thirdrelaxStartScreen');
// const gameScreen = document.getElementById('thirdrelaxGameScreen');
// const endScreen = document.getElementById('thirdrelaxEndScreen');
// const startButton = document.getElementById('thirdrelaxStartButton');
// const restartButton = document.getElementById('thirdrelaxRestartButton');
// const bird = document.getElementById('thirdrelaxBird');
// const scoreDisplay = document.getElementById('thirdrelaxScoreDisplay');
// const finalScoreDisplay = document.getElementById('thirdrelaxFinalScore');
// const ground = document.getElementById('thirdrelaxGround');

// // 游戏变量
// let gameHeight, gameWidth;
// let birdTop = 50;
// let gravity = 0.5;
// let velocity = 0;
// let gameRunning = false;
// let score = 0;
// let pipes = [];
// let frameCount = 0;
// let pipeInterval = 90; // 管道生成间隔

// // 初始化游戏
// function initGame() {
//   // 获取游戏区域尺寸
//   gameHeight = gameContainer.offsetHeight;
//   gameWidth = gameContainer.offsetWidth;

//   // 重置游戏状态
//   birdTop = 50;
//   velocity = 0;
//   score = 0;
//   pipes = [];
//   frameCount = 0;

//   // 更新分数显示
//   scoreDisplay.textContent = score;

//   // 重置小鸟位置
//   bird.style.top = birdTop + '%';
//   bird.style.transform = 'rotate(0deg)';

//   // 清除所有管道
//   const existingPipes = document.querySelectorAll('.thirdrelaxPipe');
//   existingPipes.forEach(pipe => pipe.remove());

//   // 创建云朵
//   createClouds();
// }

// // 创建云朵装饰
// function createClouds() {
//   // 清除现有云朵
//   const existingClouds = document.querySelectorAll('.thirdrelaxCloud');
//   existingClouds.forEach(cloud => cloud.remove());

//   for (let i = 0; i < 5; i++) {
//     const cloud = document.createElement('div');
//     cloud.className = 'thirdrelaxCloud';

//     // 随机位置和大小
//     const size = Math.random() * 10 + 5;
//     cloud.style.width = size + '%';
//     cloud.style.height = size * 0.6 + '%';
//     cloud.style.top = Math.random() * 50 + 5 + '%';
//     cloud.style.left = Math.random() * 100 + '%';

//     gameScreen.appendChild(cloud);
//   }
// }

// // 小鸟跳跃函数
// function thirdrelaxJump() {
//   if (!gameRunning) return;

//   velocity = -8;
//   bird.style.transform = 'rotate(-20deg)';

//   // 添加跳跃动画效果
//   bird.style.transition = 'transform 0.2s';

//   // 短暂旋转后恢复
//   setTimeout(() => {
//     if (gameRunning) {
//       bird.style.transform = 'rotate(0deg)';
//     }
//   }, 200);
// }

// // 更新小鸟位置
// function updateBird() {
//   velocity += gravity;
//   birdTop += velocity * 0.15; // 降低下降速度

//   // 限制小鸟不飞出顶部和底部
//   if (birdTop < 0) {
//     birdTop = 0;
//     velocity = 0;
//   }
//   if (birdTop > 85) {
//     birdTop = 85;
//     endGame();
//   }

//   bird.style.top = birdTop + '%';
// }

// // 创建管道
// function createPipe() {
//   const pipeGap = 25; // 管道间隙百分比
//   const minTop = 15;  // 顶部管道最小高度
//   const maxTop = 60;  // 顶部管道最大高度

//   // 随机生成顶部管道高度
//   const topHeight = Math.random() * (maxTop - minTop) + minTop;

//   // 创建顶部管道
//   const topPipe = document.createElement('div');
//   topPipe.className = 'thirdrelaxPipe';
//   topPipe.style.height = topHeight + '%';
//   topPipe.style.top = '0';
//   topPipe.style.left = '100%';
//   topPipe.dataset.passed = 'false';
//   topPipe.dataset.type = 'top';

//   // 创建底部管道
//   const bottomPipe = document.createElement('div');
//   bottomPipe.className = 'thirdrelaxPipe';
//   bottomPipe.style.height = (100 - topHeight - pipeGap) + '%';
//   bottomPipe.style.bottom = '15%';
//   bottomPipe.style.left = '100%';
//   bottomPipe.dataset.passed = 'false';
//   bottomPipe.dataset.type = 'bottom';

//   gameScreen.appendChild(topPipe);
//   gameScreen.appendChild(bottomPipe);

//   pipes.push({
//     top: topPipe,
//     bottom: bottomPipe,
//     passed: false
//   });
// }

// // 移动管道
// function movePipes() {
//   for (let i = pipes.length - 1; i >= 0; i--) {
//     const pipePair = pipes[i];
//     const topPipe = pipePair.top;
//     const bottomPipe = pipePair.bottom;

//     // 获取管道当前位置
//     let topLeft = parseFloat(topPipe.style.left);
//     let bottomLeft = parseFloat(bottomPipe.style.left);

//     // 移动管道
//     topLeft -= 1.2; // 稍微加快管道移动速度
//     bottomLeft -= 1.2;

//     topPipe.style.left = topLeft + '%';
//     bottomPipe.style.left = bottomLeft + '%';

//     // 检测小鸟是否通过管道
//     if (!pipePair.passed && topLeft < 20) {
//       pipePair.passed = true;
//       score++;
//       scoreDisplay.textContent = score;
//       // 得分动画
//       scoreDisplay.style.transform = 'scale(1.2)';
//       setTimeout(() => {
//         scoreDisplay.style.transform = 'scale(1)';
//       }, 200);
//     }

//     // 检测碰撞
//     if (detectCollision(bird, topPipe) || detectCollision(bird, bottomPipe)) {
//       endGame();
//       return;
//     }

//     // 移除屏幕外的管道
//     if (topLeft < -10) {
//       topPipe.remove();
//       bottomPipe.remove();
//       pipes.splice(i, 1);
//     }
//   }
// }

// // 碰撞检测（优化版）
// function detectCollision(bird, pipe) {
//   const birdRect = bird.getBoundingClientRect();
//   const pipeRect = pipe.getBoundingClientRect();

//   // 使用更宽松的碰撞检测
//   const birdPadding = 5; // 减少5px的碰撞检测范围

//   return !(
//     birdRect.top + birdPadding > pipeRect.bottom ||
//     birdRect.bottom - birdPadding < pipeRect.top ||
//     birdRect.right - birdPadding < pipeRect.left ||
//     birdRect.left + birdPadding > pipeRect.right
//   );
// }

// // 游戏结束
// function endGame() {
//   gameRunning = false;
//   finalScoreDisplay.textContent = "得分: " + score;
//   gameScreen.style.display = 'none';
//   endScreen.style.display = 'flex';

//   // 添加游戏结束动画
//   bird.style.transition = 'top 0.5s';
//   bird.style.top = '85%';

//   setTimeout(() => {
//     bird.style.transition = '';
//   }, 500);
// }

// // 游戏主循环
// function gameLoop() {
//   if (!gameRunning) return;

//   updateBird();
//   movePipes();

//   // 定期生成新管道
//   frameCount++;
//   if (frameCount % pipeInterval === 0) {
//     createPipe();
//   }

//   requestAnimationFrame(gameLoop);
// }

// // 开始游戏
// function startGame() {
//   initGame();
//   startScreen.style.display = 'none';
//   gameScreen.style.display = 'block';
//   endScreen.style.display = 'none';

//   // 短暂延迟后开始游戏
//   setTimeout(() => {
//     gameRunning = true;
//     gameLoop();
//   }, 500);
// }

// // 页面跳转函数（示例）
// function thirdShowPage(page) {
//   console.log("跳转到页面: " + page);
//   // 实际项目中这里会有页面跳转逻辑
// }

// // 事件监听
// startButton.addEventListener('click', startGame);
// restartButton.addEventListener('click', startGame);

// // 添加点击屏幕跳跃功能
// gameContainer.addEventListener('click', (e) => {
//   // 避免点击按钮时触发游戏跳跃
//   if (e.target.className !== 'thirddiamondbtn') {
//     thirdrelaxJump();
//   }
// });

// // 键盘空格键控制
// document.addEventListener('keydown', (e) => {
//   if (e.code === 'Space') {
//     thirdrelaxJump();
//   }
// });

// // 初始化游戏
// initGame();

// // 暴露跳跃函数给外部
// window.thirdrelaxJump = thirdrelaxJump;
















//第四页
let forthInterval = null;
let forthProgress = 0;
function runForthAnimation() {
  const wrapper = document.getElementById('forthmain'); // 最外层容器
  wrapper.style.display = 'block';                      // 先显示，才能做动画
  requestAnimationFrame(() => wrapper.classList.add('animate-forth'));
}
function runMoodModalAnimation() {
  const modal = document.getElementById('forthMoodModal');
  modal.style.display = 'flex';               // 先让元素出现
  requestAnimationFrame(() => modal.classList.add('animate-mood'));
}

function forthResetPage() {
  forthreturn()
  /* 1. 把主页面关掉 */

  document.getElementById('forthmain').style.display = 'none';
  runMoodModalAnimation()
  /* 2. 把询问层重新请回来 */
  const modal = document.getElementById('forthMoodModal');
  modal.style.display = 'flex';
  modal.style.opacity = 1;

  // 如果之前做过淡出，需要重置

  /* 3. 其余原有清零逻辑 */
  document.getElementById('forthProgressBar').style.width = '0%';
  document.getElementById('forthMusicContent').style.display = 'none';
  document.getElementById('forthSubmitBar').style.width = '0%';
  document.getElementById('forthSubmitStatus').innerText = '';
  document.querySelectorAll('input[type=radio]').forEach(el => el.checked = false);
  document.body.style.backgroundColor = '';
  clearInterval(forthInterval);
  forthProgress = 0;
}

function forthChooseMood(mood) {
  let color = {
    joy: '#ccffdcff',
    sad: '#cce6ff',
    anger: '#ffd6cc'
  }[mood];


  runForthAnimation()
  const modal = document.getElementById('forthMoodModal');
  modal.style.opacity = 0;



  document.getElementById('forthmain').style.display = 'block';
  document.getElementById('forthMusicContent').style.display = 'flex';
  modal.style.display = 'none';

  document.getElementById("rightforth").style.backgroundColor = color
  document.getElementById("right").style.backgroundColor = color

  if (mood == "joy") {
    document.getElementById("forthmain").style.backgroundColor = "#00ff4c38"
    document.getElementById("forthProgressBar").style.backgroundColor = "#54ff41a9"
    document.getElementById("ilikeit").style.backgroundColor = "#48ff7947"
    document.getElementById("idontlikeit").style.backgroundColor = "#70ff483e"
    document.getElementById("forthControls").style.backgroundColor = "#00ff662f"
    document.getElementById("forthMainMusic").style.backgroundColor = "#40ff1a45"
    document.getElementById("forthMusicList").style.backgroundColor = "#31ff572d"
    document.getElementById("forthMusicOptions").style.backgroundColor = "#abefc790"
    document.getElementById("forthmusicul").style.backgroundColor = "#fff1f17d"
    document.getElementById("yourlikeul").style.backgroundColor = "#76ff273c"
    var li1 = document.getElementsByClassName("forthmainmusicli")
    for (var i = 0; i < li1.length; i++) {
      li1[i].style.backgroundColor = "#15ffa13c"
    }
    var li2 = document.getElementsByClassName("yourlikeli")
    for (var i = 0; i < li2.length; i++) {
      li2[i].style.backgroundColor = "#9aff671c"
    }
    document.getElementById("forthmusictile").style.backgroundColor = "#2ec30025"
    var li3 = document.getElementsByClassName("forthbutton")
    for (var i = 0; i < li3.length; i++) {
      li3[i].style.backgroundColor = "#97ffb654"
    }
    document.getElementById("forthmusicoptiondiv").style.border = "5px solid #3fff4c3c"
    document.getElementById("forthmusicul").style.border = "8px solid #b1ff8137"
  }
  else if (mood == "sad") {
    document.getElementById("forthmain").style.backgroundColor = "#00a6ff44"
    document.getElementById("forthProgressBar").style.backgroundColor = "#41dcffc3"
    document.getElementById("ilikeit").style.backgroundColor = "#48b3ffa3"
    document.getElementById("idontlikeit").style.backgroundColor = "#48c5ff56"
    document.getElementById("forthControls").style.backgroundColor = "#00eeff48"
    document.getElementById("forthMainMusic").style.backgroundColor = "#1affe445"
    document.getElementById("forthMusicList").style.backgroundColor = "#31c5ff35"
    document.getElementById("forthMusicOptions").style.backgroundColor = "#abb7ef82"
    document.getElementById("forthmusicul").style.backgroundColor = "#8be2ff77"
    document.getElementById("yourlikeul").style.backgroundColor = "#27a1ff41"
    var li1 = document.getElementsByClassName("forthmainmusicli")
    for (var i = 0; i < li1.length; i++) {
      li1[i].style.backgroundColor = "#6715ff47"
    }
    var li2 = document.getElementsByClassName("yourlikeli")
    for (var i = 0; i < li2.length; i++) {
      li2[i].style.backgroundColor = "#67fffc40"
    }
    document.getElementById("forthmusictile").style.backgroundColor = "#1a00c325"
    var li3 = document.getElementsByClassName("forthbutton")
    for (var i = 0; i < li3.length; i++) {
      li3[i].style.backgroundColor = "#97ffe282"
    }
    var li4 = document.getElementsByClassName("styled-button")
    for (var i = 0; i < li4.length; i++) {
      li4[i].style.backgroundColor = "#97ffe282"
    }
    document.getElementById("forthmusicoptiondiv").style.border = "5px solid #3f4fff69"
    document.getElementById("forthmusicul").style.border = "8px solid rgba(0, 4, 255, 0.26)"
  }
  else if (mood == "anger") {
    document.getElementById("forthmain").style.backgroundColor = "#ff59002f"
    document.getElementById("forthProgressBar").style.backgroundColor = "#ff9d4146"
    document.getElementById("ilikeit").style.backgroundColor = "#ffcb482b"
    document.getElementById("idontlikeit").style.backgroundColor = "#ffcb483d"
    document.getElementById("forthControls").style.backgroundColor = "#ff990045"
    document.getElementById("forthMainMusic").style.backgroundColor = "#ff631a33"
    document.getElementById("forthMusicList").style.backgroundColor = "#ffa63130"
    document.getElementById("forthMusicOptions").style.backgroundColor = "#efb4ab48"
    document.getElementById("forthmusicul").style.backgroundColor = "rgba(255, 236, 214, 0.4)"
    document.getElementById("yourlikeul").style.backgroundColor = "#ff97272f"
    var li1 = document.getElementsByClassName("forthmainmusicli")
    for (var i = 0; i < li1.length; i++) {
      li1[i].style.backgroundColor = "#ffb91539"
    }
    var li2 = document.getElementsByClassName("yourlikeli")
    for (var i = 0; i < li2.length; i++) {
      li2[i].style.backgroundColor = "#ff67a140"
    }
    document.getElementById("forthmusictile").style.backgroundColor = "#c3850025"
    var li3 = document.getElementsByClassName("forthbutton")
    for (var i = 0; i < li3.length; i++) {
      li3[i].style.backgroundColor = "#ffd09750"
    }
    var li4 = document.getElementsByClassName("styled-button")
    for (var i = 0; i < li4.length; i++) {
      li4[i].style.backgroundColor = "#ffbd973a"
    }
    document.getElementById("forthmusicul").style.border = "8px solid #ffb38154"
    document.getElementById("forthmusicoptiondiv").style.border = "5px solid #ff8f3f54"
  }


}

function forthStartProgressBar() {
  clearInterval(forthInterval);
  forthInterval = setInterval(() => {
    if (forthProgress >= 110) {
      clearInterval(forthInterval);
      return;
    }
    forthProgress++;
    document.getElementById('forthProgressBar').style.width = forthProgress + '%';
  }, 1000);
}
var changeplayimg = 0
document.getElementById('forthPlayPauseBtn').onclick = () => {
  changeforthplayimg()
  if (forthInterval) {
    clearInterval(forthInterval);
    forthInterval = null;
  } else {
    forthStartProgressBar();
  }
};
for (var i = 0; i < document.getElementsByClassName("musicgoimggoing").length; i++) {
  document.getElementsByClassName('musicgoimggoing')[i].onclick = () => {
    forthProgress = 0;
    document.getElementById('forthProgressBar').style.width = '0%';
    forthStartProgressBar();
    if (changeplayimg % 2 == 0) {
      changeforthplayimg()
    }
    musicgo()
  }

}
let currentState = "none";

function like() {
  const likeDiv = document.getElementById("ilikeit");
  const dislikeDiv = document.getElementById("idontlikeit");

  if (currentState === "like") {
    // 取消喜欢
    likeDiv.style.backgroundImage = "url(./src/24.png)";
    likeDiv.style.backgroundColor = "#fffffffe";
    likeDiv.textContent = "喜欢这首";
    currentState = "none";
  } else if (currentState === "dislike") {
    if (confirm("您方才的不喜欢是试探吗，现在将此首标记为喜欢吗？")) {
      // 取消不喜欢 → 喜欢
      dislikeDiv.style.backgroundImage = "url(./src/34.png)";
      dislikeDiv.style.backgroundColor = "#fffffffe";
      dislikeDiv.textContent = "不喜欢这首";

      likeDiv.style.backgroundImage = "url(./src/25.png)";
      likeDiv.style.backgroundColor = "#ff60cdab";
      likeDiv.textContent = "喜欢！";
      currentState = "like";
    } else {
      alert("好的，不要调皮噢");
    }
  } else {

    likeDiv.style.backgroundImage = "url(./src/25.png)";
    likeDiv.style.backgroundColor = "#ff60cdab";
    likeDiv.textContent = "喜欢！";
    currentState = "like";
  }
}

function dislike() {
  const likeDiv = document.getElementById("ilikeit");
  const dislikeDiv = document.getElementById("idontlikeit");

  if (currentState === "dislike") {

    dislikeDiv.style.backgroundImage = "url(./src/34.png)";
    dislikeDiv.style.backgroundColor = "#fffffffe";
    dislikeDiv.textContent = "不喜欢这首";
    currentState = "none";
  } else if (currentState === "like") {
    if (confirm("您确定您是真的不喜欢这首吗？现在取消对其的喜欢并标记为不喜欢了吗？")) {

      likeDiv.style.backgroundImage = "url(./src/24.png)";
      likeDiv.style.backgroundColor = "#fffffffe";
      likeDiv.textContent = "喜欢这首";

      dislikeDiv.style.backgroundImage = "url(./src/35.png)";
      dislikeDiv.style.backgroundColor = "#87878780";
      dislikeDiv.textContent = "不喜欢！";
      currentState = "dislike";
    } else {
      alert("明白了，真拿你没办法~");
    }
  } else {

    dislikeDiv.style.backgroundImage = "url(./src/35.png)";
    dislikeDiv.style.backgroundColor = "#87878780";
    dislikeDiv.textContent = "不喜欢！";
    currentState = "dislike";
  }
}




for (var i = 0; i < document.getElementsByClassName("yourlikeli").length; i++) {
  document.getElementsByClassName('yourlikeli')[i].onclick = () => {
    forthProgress = 0;
    document.getElementById('forthProgressBar').style.width = '0%';
    forthStartProgressBar();
    if (changeplayimg % 2 == 0) {
      changeforthplayimg()
    }
    likemusicgo()
  }
}

document.getElementById('forthPrevBtn').onclick = () => {
  forthProgress = 0;
  document.getElementById('forthProgressBar').style.width = '0%';
  forthStartProgressBar();
  if (changeplayimg % 2 == 0) {
    changeforthplayimg()
  }
};

document.getElementById('forthNextBtn').onclick = () => {
  forthProgress = 0;
  document.getElementById('forthProgressBar').style.width = '0%';
  forthStartProgressBar();
  if (changeplayimg % 2 == 0) {
    changeforthplayimg()
  }
};



function musicgo() {
  if (changeplayimg % 2 == 0) {
    changeforthplayimg()
  }
  var k = document.getElementById("forthMusicCover")
  k.style.backgroundImage = "url(./src/33.jpg)"
}
function likemusicgo() {
  if (changeplayimg % 2 == 0) {
    changeforthplayimg()
  }
  var k = document.getElementById("forthMusicCover")
  k.style.backgroundImage = "url(./src/32.jpg)"
}
function thatisgood(n) {
  var img = document.getElementsByClassName("musicgoimg")[n]
  if (img.src.endsWith("22.png")) {
    img.src = "./src/23.png";
  } else {
    img.src = "./src/22.png";
  }
}
function ilikeit(n) {
  const img = document.getElementsByClassName("musicgoimg")[n];
  if (img.src.endsWith("24.png")) {
    img.src = "./src/25.png";
  } else {
    img.src = "./src/24.png";
  }
}
var musicpic1 = "./src/26.jpg"
var musicpic2 = "./src/27.jpg"
var musicpic3 = "./src/28.jpg"
var musicpic4 = "./src/29.jpg"
var musicpic5 = "./src/30.jpg"
var musicpic6 = "./src/31.jpg"
var musicimg = [musicpic1, musicpic2, musicpic3, musicpic4, musicpic5, musicpic6]
function optionmusic(n) {
  forthProgress = 0;
  var k = document.getElementById("forthMusicCover")
  k.style.backgroundImage = "url(" + musicimg[n] + ")"
  document.getElementById('forthProgressBar').style.width = '0%';
  forthStartProgressBar();
  if (changeplayimg % 2 == 0) {
    changeforthplayimg()
  }
}





function forthSubmitEvaluation() {
  const q1 = document.querySelector('input[name=forthQ1]:checked');
  const q2 = document.querySelector('input[name=forthQ2]:checked');
  const q3 = document.querySelector('input[name=forthQ3]:checked');
  if (!q1 || !q2 || !q3) {
    alert('请完成评价！');
    return;
  }
  let percent = 0;
  let bar = document.getElementById('forthSubmitBar');
  let status = document.getElementById('forthSubmitStatus');
  bar.style.width = '0%';
  status.innerText = '';
  let timer = setInterval(() => {
    percent += 10;
    bar.style.width = percent + '%';
    if (percent >= 100) {
      clearInterval(timer);
      status.innerText = '提交成功！';
    }
  }, 50);
}

function forthEndSession() {
  if (confirm('即将结束本次疗愈')) {
    forthResetPage();
  }
  else return
}

// 页面载入或切换回来时可手动调用这个函数以重置状态


function changeforthplayimg() {
  var k = document.getElementById("forthPlayPauseBtn")
  if (changeplayimg % 2 == 0) {
    k.style.backgroundImage = "url(./src/17.png)"
  }
  else {
    k.style.backgroundImage = "url(./src/18.png)"
  }
  changeplayimg += 1
}

function forthshowquestion() {
  var a = document.getElementById("forthmain")
  var b = document.getElementById("forthend")
  a.style.display = "none"
  b.style.display = "flex"
}
function forthreturn() {
  var a = document.getElementById("forthmain")
  var b = document.getElementById("forthend")
  b.style.display = "none"
  a.style.display = "block"
}


/*第五页 */
/*日历 */
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("fifthDatePicker");
  const yearMonthDisplay = document.getElementById("fifthDateInfo");
  const dayDisplay = document.getElementById("fifthDateNumber");

  dateInput.addEventListener("change", function () {
    if (!this.value) return;

    const selectedDate = new Date(this.value);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1; // 月份从0开始
    const day = selectedDate.getDate();

    yearMonthDisplay.textContent = `${year}年${month}月`;
    dayDisplay.textContent = `${day}`;
  });
});

function fifthmain(n) {
  var a = document.getElementsByClassName("fifthmainsecondimg")
  var b = document.getElementsByClassName("rightfifthmainitem")
  var c = document.getElementsByClassName("fifthSection")
  for (var i = 0; i < a.length; i++) {
    a[i].style.opacity = 0
  }
  for (var i = 0; i < b.length; i++) {
    b[i].style.backgroundColor = "#ffffff"
  }
  for (var i = 0; i < c.length; i++) {
    c[i].style.display = "none"
  }
  a[n].style.opacity = 1
  b[n].style.backgroundColor = "#adc4ff"
  c[n].style.display = "block"
  var op = document.getElementById("fifthEmotionTrack")
  if (n == 3) {
    op.style.display = "block"
  }
  var d = document.getElementsByClassName("fifthcanvas")
  var e = document.getElementsByClassName("fifthSectionchart")
  for (var i = 0; i < 3; i++) {

    d[i].style.display = "none"
    e[i].style.display = "none"
  }
  showButtons()

}

function fifthgotoimg(n) {
  var k = document.getElementById("fifthTrendCharts")
  k.style.display = "none"
  var op = document.getElementsByClassName("fifthSectionchart")[n]
  var sb = document.getElementsByClassName("fifthcanvas")[n]
  op.style.display = "block"
  sb.style.display = "block"
  if (n == 0) {
    fifthLineChart.reset()
    fifthLineChart.update()

  }
  else if (n == 1) {
    fiftharea.reset()
    fiftharea.update()
  }
  showButtons()

}

function fifthBackToTrend(n) {
  var k = document.getElementsByClassName("fifthSectionchart")
  for (var i = 0; i < 3; i++) {
    k[n].style.display = "none"
  }

  var sb = document.getElementsByClassName("fifthcanvas")
  for (var i = 0; i < 3; i++) {
    sb[n].style.display = "none"
  }
  var a = document.getElementById("fifthTrendCharts")
  a.style.display = "block"
  showButtons()
}

function showButtons() {
  const fifthBtns = document.querySelectorAll(".fifthButton");
  const returnBtns = document.querySelectorAll(".fifthButtonreturn");

  const animate = (elements, animationClass) => {
    elements.forEach(el => {
      el.classList.remove(animationClass);    // 移除旧动画类
      void el.offsetWidth;                    // 强制重绘，重触发动画
      el.classList.add(animationClass);       // 添加动画类
    });
  };

  animate(fifthBtns, "fifthButtonAnimation");
  animate(returnBtns, "fifthButtonreturnAnimation");
}

function fifthShowAnimation() {
  // 所有需要动画的盒子选择器
  const selectors = [
    "#rightfifthtitle",
    "#rightfifthbook",
    "#rightfifthmain",
    "#rightfifthable .fifthSection",
    "#rightfifthable .fifthSectionchart",
    "#user2"
  ];

  // 清除旧动画（便于重复触发）
  document.querySelectorAll(".fifth-animate-in").forEach(el => {
    el.classList.remove("fifth-animate-in");
  });

  // 为匹配的元素依次添加动画类（可加入延时效果）
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
      // 设置延迟，避免所有同时进入
      setTimeout(() => {
        el.classList.add("fifth-animate-in");
      }, index * 100);
    });
  });
}














































//横向图
const ctx = document.getElementById('rightfirstmainleftchart').getContext('2d');

const emotionBar = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      '情绪稳定程度',
      '接受情绪调频效果',
      '音乐疗愈效果',
      '进行情绪记录的连续性'
    ],
    datasets: [{
      label: '评估值',
      data: [35, 79, 58, 91],
      backgroundColor: [
        '#4CAF50',
        '#2196F3',
        '#FF9800',
        '#9C27B0'
      ],
      borderRadius: 6,
      barThickness: 24
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: '个人情绪指标图',
        font: {
          size: 18
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label;
            const value = context.raw;
            return `${label}: ${value} 分`;
          }
        }
      }
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: '百分制数值'
        },
        ticks: {
          callback: function (value) {
            return value + '%';
          }
        }
      },
      y: {
        title: {
          display: false
        }
      }
    }
  }
});


const ctx1 = document.getElementById('chart');
const emothionline = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    datasets: [
      { label: '愉悦', data: [85, 49, 80, 99, 56, 25, 2], borderColor: '#ff6b6b', backgroundColor: 'transparent', tension: .4 },
      { label: '平静', data: [69, 50, 81, 86, 55, 20, 15], borderColor: '#4ecdc4', backgroundColor: 'transparent', tension: .4 },
      { label: '焦虑', data: [23, 84, 12, 45, 23, 80, 91], borderColor: '#ffa726', backgroundColor: 'transparent', tension: .4 }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: t => t[0].label
        }
      }
    },
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } },
      x: { grid: { display: false } }
    }
  }
});

const ctx2 = document.getElementById('emotionPie').getContext('2d');

const emotionDescriptions = {
  '喜悦': '周一与老友聚会；周四终于完成所有大作业',
  '平静': '这周大部分时间都如平常一般淡如水',
  '悲伤': '周三被三叶与泷的故事而感动；周六得知还有一个大作业没写完',
  '愤怒': '周二被高数难生气了',
  '混乱': '所有事情都不是只有一个情绪，其中的很多都还无法确定……'
};

const emotionPie = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['喜悦', '平静', '悲伤', '愤怒', '混乱'],
    datasets: [{
      label: '本周情绪构成',
      data: [28, 42, 11, 9, 10],
      backgroundColor: [
        '#FFD700',  // 喜悦
        '#87CEFA',  // 平静
        '#A9A9A9',  // 悲伤
        '#FF6347',  // 愤怒
        '#9370DB'   // 混乱
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label;
            const value = context.raw;
            const description = emotionDescriptions[label] || '';
            return `${label}: ${value}%\n说明：${description}`;
          }
        }
      },
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: '本周情绪组成（百分比）',
        font: {
          size: 18
        }
      }
    }
  }
});

const ctx3 = document.getElementById('emotionhistory').getContext('2d');

const emotionChart = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['快乐', '愤怒', '悲伤', '焦虑', '复杂'],
    datasets: [{
      label: '识别次数',
      data: [58, 42, 64, 12, 38],
      backgroundColor: [
        'rgba(255, 206, 86, 0.6)',   // 快乐
        'rgba(255, 99, 132, 0.6)',   // 愤怒
        'rgba(54, 162, 235, 0.6)',   // 悲伤
        'rgba(153, 102, 255, 0.6)',  // 焦虑
        'rgba(75, 192, 192, 0.6)'    // 复杂
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '次数'
        }
      },
      x: {
        title: {
          display: true,
          text: '情绪种类'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: '历史情绪识别记录'
      },
      legend: {
        display: false
      }
    }
  }
});


/*第五页 */




const fifthLineData = {
  labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  datasets: [
    {
      label: '喜',
      data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50 + 50)),
      borderColor: 'green',
      tension: 0.4
    },
    {
      label: '悲',
      data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50 + 10)),
      borderColor: 'blue',
      tension: 0.4
    },
    {
      label: '怒',
      data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 50 + 20)),
      borderColor: 'red',
      tension: 0.4
    }
  ]
};
const fifthLineChart = new Chart(document.getElementById('fifthLineChart'), {
  type: 'line',
  data: fifthLineData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
  }
});

const json = [
  { date: '周一', pos: 0.3, neu: 0.4, neg: 0.3 },
  { date: '周二', pos: 0.4, neu: 0.3, neg: 0.3 },
  { date: '周三', pos: 0.2, neu: 0.5, neg: 0.3 },
  { date: '周四', pos: 0.5, neu: 0.3, neg: 0.2 },
  { date: '周五', pos: 0.3, neu: 0.5, neg: 0.2 },
  { date: '周六', pos: 0.6, neu: 0.2, neg: 0.2 },
  { date: '周日', pos: 0.5, neu: 0.3, neg: 0.2 }
];
const fiftharea = new Chart(document.getElementById('stackedArea'), {
  type: 'line',
  data: {
    labels: json.map(d => d.date),
    datasets: [
      {
        label: 'Pos',
        data: json.map(d => d.pos * 100),
        backgroundColor: '#4ADE80',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Neu',
        data: json.map(d => (d.pos + d.neu) * 100),
        backgroundColor: '#60A5FA',
        fill: '-1',
        tension: 0.3
      },
      {
        label: 'Neg',
        data: json.map(d => 100),
        backgroundColor: '#F87171',
        fill: '-1',
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: v => v + '%'
        }
      },
      x: {
        grid: { display: false }
      }
    },
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.raw.toFixed(0)}%`
        }
      }
    }
  }
});





/*日历热力图 */
/* ---------- 1. 本地存储 ---------- */
const LS_KEY = 'mood2026';
function loadData() { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
function saveData(d) { localStorage.setItem(LS_KEY, JSON.stringify(d)); }
let DATA = loadData();

/* ---------- 2. 常量 ---------- */
const YEAR = 2026;
const first = new Date(YEAR, 0, 1);
const start = new Date(first);
start.setDate(first.getDate() - first.getDay()); // 周日开头
const weeks = 53;

/* ---------- 3. 画日历 ---------- */
const svg = document.getElementById('cal');
const cell = 1000 / weeks / 1.15;   // 一格宽度
const gap = cell * 0.15;
const h = cell * 7 + 20;
svg.setAttribute('viewBox', `0 0 1000 ${h}`);
svg.innerHTML = '';

/* 星期文字 */
['日', '一', '二', '三', '四', '五', '六'].forEach((txt, i) => {
  const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  t.textContent = txt;
  t.setAttribute('x', 0);
  t.setAttribute('y', 15 + i * (cell + gap));
  t.setAttribute('class', 'wday');
  svg.appendChild(t);
});

/* 生成格子 */
const rects = new Map();   // date -> rect
for (let w = 0; w < weeks; w++) {
  for (let d = 0; d < 7; d++) {
    const date = new Date(start);
    date.setDate(start.getDate() + w * 7 + d);
    if (date.getFullYear() !== YEAR) continue;

    const key = date.toISOString().slice(0, 10);
    const x = 20 + w * (cell + gap);
    const y = 3 + d * (cell + gap);

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', cell);
    rect.setAttribute('height', cell);
    rect.dataset.date = key;
    setRectClass(rect, DATA[key]?.score);
    svg.appendChild(rect);
    rects.set(key, rect);
  }
}

function setRectClass(rect, score) {
  if (score === undefined) {
    rect.setAttribute('class', 'none');
  } else {
    const c = score <= 1 ? 'l0' : score <= 2 ? 'l1' : score <= 3 ? 'l2' : score <= 4 ? 'l3' : 'l4';
    rect.setAttribute('class', c);
  }
}

/* ---------- 4. 弹窗 ---------- */
const dlg = document.getElementById('dlg');
const dlgTitle = document.getElementById('dlgTitle');
const dlgDate = document.getElementById('dlgDate');
const scoreSel = document.getElementById('scoreSel');
const noteTxt = document.getElementById('noteTxt');
const saveBtn = document.getElementById('save');
const delBtn = document.getElementById('del');
const cancelBtn = document.getElementById('cancel');

let curDate = null;

function openDialog(dateStr, isEdit = false) {
  curDate = dateStr;
  dlg.classList.remove('hidden');
  dlgDate.textContent = dateStr;
  if (isEdit) {
    dlgTitle.textContent = '编辑记录';
    const { score, note } = DATA[dateStr];
    scoreSel.value = score;
    noteTxt.value = note || '';
    delBtn.classList.remove('hidden');
  } else {
    dlgTitle.textContent = '新增记录';
    scoreSel.value = 3;
    noteTxt.value = '';
    delBtn.classList.add('hidden');
  }
}
function closeDialog() {
  dlg.classList.add('hidden');
  curDate = null;
}

/* 事件 */
svg.addEventListener('click', e => {
  if (e.target.tagName !== 'rect') return;
  const date = e.target.dataset.date;
  DATA[date] ? openDialog(date, true) : openDialog(date, false);
});
saveBtn.onclick = () => {
  const score = +scoreSel.value;
  const note = noteTxt.value.trim();
  DATA[curDate] = { score, note };
  saveData(DATA);
  setRectClass(rects.get(curDate), score);
  closeDialog();
};
delBtn.onclick = () => {
  delete DATA[curDate];
  saveData(DATA);
  setRectClass(rects.get(curDate), undefined);
  closeDialog();
};
cancelBtn.onclick = closeDialog;
function jumpToDate() {
  const val = document.getElementById('datePicker').value;
  if (!val) { alert('请选择日期'); return; }
  const rect = rects.get(val);
  if (!rect) { alert('该日期不在 2026 年范围内'); return; }


  rect.scrollIntoView({ behavior: 'smooth', block: 'center' });


  rect.classList.add('jump-flash');
  setTimeout(() => rect.classList.remove('jump-flash'), 1000);

  setTimeout(() => rect.dispatchEvent(new Event('click')), 600);
}
