import { useState } from "react";

function Chat() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!question.trim()) {
      return;
    }

    setLoading(true);
    setAnswer("");

    try {

      const response = await fetch(
        "http://localhost:8080/api/ai/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            question: question
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setAnswer(data.answer);

    } catch (error) {

      setAnswer(
        "Unable to connect to AI. Please try again."
      );

      console.error(error);

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="chat-box">

      <div className="chat-input-area">

        <textarea
          placeholder="Ask about nutrition, workouts, BMI..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows="3"
        />

        <button
          onClick={askAI}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI →"}
        </button>

      </div>


      {answer && (
        <div className="ai-answer">

          <div className="answer-title">
            <span>🤖</span>
            <strong>AI Coach</strong>
          </div>

          <p>{answer}</p>

        </div>
      )}

    </div>
  );
}

export default Chat;