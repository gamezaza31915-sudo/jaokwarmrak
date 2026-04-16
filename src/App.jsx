import { useState } from "react";

const openYoutube = () => {
  window.open("https://youtu.be/MFtfIpt7DfY?si=cipiC_35YceGBq1j", "_blank");
};

const sendToSheet = async (allAnswers) => {
  try {
    await fetch("https://script.google.com/macros/s/AKfycbyQkb8dFeRaQs3mqd3FeYBLXta7BYmxdRFMmD-jDgHvZC38Pz7xP7F_kyAZ9a_MIE2qHA/exec", {
      method: "POST",
      body: JSON.stringify({ answers: allAnswers }),
    });
  } catch (err) {
    console.error(err);
  }
};

const questions = [
  {
    q: "เป็นไงบ้างครับคนเก่งสบายดีไหม",
    a: "เค้าก็สบายดีนะแต่เหมือนมันขาดอะไรไปบางอย่าง",
    img: "https://cdn.discordapp.com/attachments/838101240214847521/1494187493518479452/IMG_6970.jpg?ex=69e1b20b&is=69e0608b&hm=aa0b242d43bf9c3b512e73464eeafc297deb8f0f8885f3396c99c4b84deac3d1&",
  },
  {
    q: "แล้วเป็นไงบ้างหลังจากที่ได้ไปพัก",
    a: "เค้าพอได้พักก็ได้คิดอะไรหลายๆเรื่องเลยทั้งเรื่องที่ดีและเรื่องที่รู้สึกไม่ดี",
    img: "https://cdn.discordapp.com/attachments/838101240214847521/1494188682708779028/IMG_6398.jpg?ex=69e1b326&is=69e061a6&hm=08853d4aa4c51d786f46df3e1ac9e95f5261090e2b2958658fb114913f73ba17&",
  },
  {
    q: "แล้วมีเรื่องอะไรดีๆอยากเล่าให้ฟังไหมครับระหว่างที่ไม่ได้คุยกันถ้ามีเยอะเอาไว้ตอนเจอกันหรือโทรหากันก็อย่าลืมเล่าให้ฟังนะ",
    a: "ดีใจด้วยนะที่เธอเจอเรื่องดี เค้าก็มีเหมือนกันไว้แล้วเค้าเล่าให้ฟังนะถ้าอยากฟัง",
    img: "https://cdn.discordapp.com/attachments/838101240214847521/1494190749275652126/IMG_3517.jpg?ex=69e1b513&is=69e06393&hm=acdd1bffcfec6f3910c1220715830f37d44b2e78e637b6f1f35e226786072d9c&",
  },
  {
    q: "เรื่องดีๆเล่ามาละ แล้วมีเรื่องแย่ๆอยากระบายให้เค้าฟังไหมเล่ามา1เรื่องก็ได้หรืออยากโทรมาก็ได้นะ ระบายมาได้เต็มที่เลย",
    a: "โอ๋ๆๆ นะคนเก่งเธอเป็นคนเก่งมากๆเลยครับอย่าให้คนอื่นมาเอารอยยิ้มของเธอไปไหนเลยนะ เค้าอยู่ตรงนี้นี่แหละมีอะไรก็มาเล่าให้ฟังได้เลย เค้าก็มีเรื่องแย่ๆมาเหมือนกันอยากระบายให้เธอฟังมากๆๆ",
    img: "https://cdn.discordapp.com/attachments/838101240214847521/1494191155938853014/IMG_5180.jpg?ex=69e1b574&is=69e063f4&hm=69aa6d067c41de91fa4516b0dd64548d58da2c14e231c48f472f05e027a30f5b&",
  },
  {
    q: "ถามมาหลายคำถามเลยมีอะไรอยากจะบอกกับเค้าไหม",
    a: "ขอบคุณเธอนะที่ เลือกที่จะอยู่กันตรงนี้ไม่ทิ้งกันไปแบบตัดความสัมพันธ์",
    img: "https://cdn.discordapp.com/attachments/838101240214847521/1494196187971059722/image.jpg?ex=69e1ba24&is=69e068a4&hm=11b9f9edf58105d8b247ec7804230393674e2929cb9331c6c01eb5279864c316&",
  },
  {
    q: "ขอบคุณนะที่ยังมายอมเล่นเว็บนี้กับเค้า เค้าก็ไม่รู้หรอกนะว่าคำตอบในใจตอนนี้เธอเป็นอย่างไง เค้าขอให้เราคิดตรงกันนะ แต่ถ้าสุดท้ายแล้วมันไม่ตรงไม่เป็นไรนะอย่างน้อยเราก็ได้ลองพยายามกันทุกทางเพื่อที่จะรักษากันไว้แล้ว เค้าไม่รู้สึกเสียใจเลยสักครั้งเลยนะที่เลือกเธอเข้ามาเป็นส่วนหนึ่งในชีวิตเค้า ถ้าได้คำตอบในใจแล้วก็มาบอกกันนะส่วนเค้าก็มีคำตอบในใจเค้าอยู่แล้วเหมือนกัน",
    a: "ไม่ต้องรีบนะคับ ถ้ายังรู้สึกไม่มั่นใจ ขอโทษเธอด้วยนะถ้าหากเว็บนี้มันทำให้เธอลำบากใจหรือเสียใจ",
    img: "https://cdn.discordapp.com/attachments/838101240214847521/1494193589847068672/image.jpg?ex=69e1b7b8&is=69e06638&hm=662d4daef2575b1d7399ad5b004da41ae2a43edc5cec919c9f7048d31faf397e&",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [answers, setAnswers] = useState([]);


  const checkAnswer = () => {
    if (input.trim() === "") {
      setResult("ลองตอบก่อนน้า 😆");
      return;
    }

    if (input.includes("รัก") || input.includes("คิดถึง")) {
      setResult("คำตอบดีมากกก 💖");
    } else {
      setResult(`${questions[index].a}`);
    }
  };

  const sendToEmail = (allAnswers) => {
    const body = questions
      .map((q, i) => `${q.q}\n👉 ${allAnswers[i] || ""}`)
      .join("\n\n");

    window.location.href = `mailto:gotham.0706@gmail.com?subject=คำตอบของเค้า 💖&body=${encodeURIComponent(body)}`;
  };

  const nextCard = () => {
    const newAnswers = [...answers, input];
    setAnswers(newAnswers);

    if (index === questions.length - 1) {
      sendToSheet(newAnswers);

      setTimeout(() => {
        openYoutube();
      }, 1000); // หน่วง 1 วิ ให้ฟีลนิดนึง

      return;
    }

    setInput("");
    setResult("");
    setIndex((prev) => prev + 1);
  };
  const openYoutube = () => {
  window.open("https://youtu.be/MFtfIpt7DfY?si=cipiC_35YceGBq1j", "_blank");
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={questions[index].img} alt="" style={styles.image} />

        <h2 style={styles.text}>{questions[index].q}</h2>

        <input
          style={styles.input}
          placeholder="พิมพ์คำตอบตรงนี้..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button style={styles.button} onClick={checkAnswer}>
          ส่งคำตอบ
        </button>

        {result && <p style={styles.result}>{result}</p>}

        <button style={styles.nextButton} onClick={nextCard}>
          {index === questions.length - 1 ? "ส่งคำตอบ 💌" : "ถัดไป"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffe4ec",
    fontFamily: "'Mali', cursive",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "320px",
  },
  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
  },
  text: {
    marginBottom: "15px",
    color: "#ff4d88",
    fontFamily: "'Mali', cursive",
    fontSize: "20px",
    fontWeight: "600",
  },
  input: {
    width: "93%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    background: "#ff4d88",
    color: "#fff",
    cursor: "pointer",
    marginBottom: "10px",
  },
  nextButton: {
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    background: "#999",
    color: "#fff",
    cursor: "pointer",
  },
  result: {
    margin: "10px 0",
  },
};