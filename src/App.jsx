import { useState } from "react";


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
    img: "/images/IMG_6970.jpg",
  },
  {
    q: "แล้วเป็นไงบ้างหลังจากที่ได้ไปพัก",
    a: "เค้าพอได้พักก็ได้คิดอะไรหลายๆเรื่องเลยได้ทบทวนเรื่องราวที่ผ่านมา ได้พักช่วงให้กับความสัมพันธ์เราให้ได้พักหายใจ ได้คิดอะไรหลายๆอย่างที่รู้สึกดีและไม่ดีในช่วงที่ผ่านมา",
    img: "/images/IMG_6398.jpg",
  },
  {
    q: "มีเรื่องอะไรที่อยากขอบคุณกันไหม",
    a: "เค้าก็ขอบคุณเธอมากๆเลยนะ เค้ารู้สึกได้เลยว่าที่ผ่านมาเธอตั้งใจรักเค้าอย่างเต็มที่เลย เค้าไม่เคยได้รับความรักจากใครแบบนี้มาก่อนเลย ขอบคุณที่เป็นกำลังใจในวันที่แย่ ขอบคุณที่คอยชมเค้าในวันที่เค้าทำสำเร็จ ขอบคุณที่คอยเข้าใจคอยห่วงใยเค้า ขอบคุณที่วันนั้นเธอเลือกเค้าเข้ามาเป็นส่วนหนึ่งในชีวิตของเธอ",
    img: "/images/IMG_3517.jpg",
  },
  {
    q: "แล้วมีเรื่องอะไรที่อยากจะขอโทษกันรึป่าว",
    a: "เค้าก็มีเรื่องที่อยากขอโทษเธอเหมือนกัน อย่างแรกเลยขอโทษที่เค้าทำเธอเสียใจ ทำเธอร้องไห้ ขอโทษที่ทำให้ความสัมพันธ์เราอึดอัด ขอโทษที่เค้าไม่เข้าใจเธอ ขอโทษที่เค้าทำตัวงี่เง่า งอแง ขอโทษที่บางเรื่องก็ทำไม่ได้ตามที่เธอหวัง ขอโทษที่บางครั้งเขาพูดอะไรออกไปแล้วไม่ได้คิด ขอโทษที่เค้าเอาอารมณ์เข้ามาก่อนเหตุผล ขอโทษเธอมากๆเลยนะคับ ",
    img: "/images/IMG_5180.jpg",
  },
  {
    q: "แล้วเลยมีอะไรอยากจะบอกกับเค้าไหม",
    a: "เค้าก็อยากบอกเธอว่า เธอไม่จำเป็นต้องทำตามในสิ่งที่คนอื่นพูดหรือหวังนะ รวมถึงเค้าด้วย เค้าอยากให้เธอได้เป็นตัวเธอเองนะ ไม่จำเป็นต้องเข้มแข็งตลอดเวลาหรอก ถ้าวันไหนรู้สึกเหนื่อยรู้สึกอยากร้องไห้ก็เอาตัวเองไปพักได้นะ ไม่ต้องพยายามฝืนตัวเองหรอก เธออะเป็นคนที่ไม่ค่อยคิดถึงตัวเองเลย ชอบเอาคนอื่นมาก่อนเสมอจนบ้างครั้งเธอต้องมาเหนื่อยกับตัวเอง เธอลองเห็นแก่ตัวบ้างก็ได้นะไม่ต้องคิดถึงคนอื่นตลอดหรอก เห็นแก่ตัวให้ตัวเองได้พักได้ยู่นิ่งๆจนหายเหนื่อย แล้วเธอจะได้ยิ้มออกมาได้แบบกว้างๆยิ้มแบบที่เธอมีความสุขและรอยยิ้มนั่นมันก็จพทำให้คนรอบตัวเธอมีความสุขเหมือนกัน",
    img: "/images/IMG_1234.jpg",
  },
  {
    q: "ขอบคุณนะที่ยังมายอมเล่นเว็บนี้กับเค้า เค้าก็ไม่รู้หรอกนะว่าคำตอบในใจตอนนี้เธอเป็นอย่างไง เค้าขอให้เราคิดตรงกันนะ แต่ถ้าสุดท้ายแล้วมันไม่ตรงไม่เป็นไรนะอย่างน้อยเราก็ได้ลองพยายามกันทุกทางเพื่อที่จะรักษากันไว้แล้ว เค้าไม่รู้สึกเสียใจเลยสักครั้งเลยนะที่เลือกเธอเข้ามาเป็นส่วนหนึ่งในชีวิตเค้า ถ้าได้คำตอบในใจแล้วก็มาบอกกันนะส่วนเค้าก็มีคำตอบในใจเค้าอยู่แล้วเหมือนกัน",
    a: "ไม่ต้องรีบนะคับ ถ้ายังรู้สึกไม่มั่นใจ ขอโทษเธอด้วยนะถ้าหากเว็บนี้มันทำให้เธอลำบากใจหรือเสียใจ",
    img: "/images/IMG_2345.jpg",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showVideoButton, setShowVideoButton] = useState(false);
  const [isFinished, setIsFinished] = useState(false);


  const checkAnswer = () => {
    if (input.trim() === "") {
      setResult("พิมพ์อะไรมาก็ได้น้าา");
      return;
    }

    if (input.includes("รัก") || input.includes("คิดถึง")) {
      setResult(`${questions[index].a}`);
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
      if (isFinished) return;

      setIsFinished(true);
      sendToSheet(newAnswers);
      setShowVideoButton(true);

      return;
    }

    setInput("");
    setResult("");
    setIndex((prev) => prev + 1);
  };
  const openYoutube = () => {
  window.open("https://youtu.be/rxzIiByPwZo?si=9r-GPhLZG5dLb1oY", "_blank");
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={questions[index].img} alt="" style={styles.image} />

        <h2 style={styles.text}>{questions[index].q}</h2>

        <input
          style={styles.input}
          placeholder="พิมพ์คำตอบตรงนี้...💖"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button style={styles.button} onClick={checkAnswer}>
          ส่งคำตอบ
        </button>

        {result && <p style={styles.result}>{result}</p>}
        {showVideoButton && (
          <div>
            <p style={{ margin: "10px 0" }}>
              เค้ามีอะไรอยากให้เธอดูต่อด้วยแหละ... จริงๆอยากดูด้วยกันถ้าโอเค คอลมาหากันนะ 📞
            </p>

            <button style={styles.button} onClick={openYoutube}>
              กดดูตรงนี้ 💖
            </button>
          </div>
        )}

        {!isFinished && (
          <button
            style={styles.nextButton}
            onClick={nextCard}
          >
            {index === questions.length - 1 ? "ถัดไป" : "ถัดไป"}
          </button>
        )}
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