/* FarmQuiz clone: compact centered composition, olive prompt card, coral answer cards, explicit feedback, and no extra navigation. */
import { Check, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AUDIO_URL = "/manus-storage/quiz-audio_3c0027a5.mp3";

const QUESTIONS = [
  {
    question: "Qual é o principal benefício da Linha Calendula da Farmasi?",
    options: [
      "Conforto imediato, hidratação profunda e ação calmante",
      "Controlar oleosidade e acne",
      "Estimular o crescimento capilar",
      "Uniformizar o tom da pele",
    ],
    correct: 0,
  },
  {
    question: "A linha de maquiagem 'VFX Pro' é famosa por qual característica principal?",
    options: [
      "Acabamento em pó mineral",
      "Cuidado labial hidratante",
      "Tecnologia de efeito Photoshop",
      "Ingredientes orgânicos",
    ],
    correct: 2,
  },
  {
    question: "Qual ingrediente é o destaque da linha capilar 'Reviving'?",
    options: ["Alho e Capixyl", "Chá Verde e Mentol", "Óleo de Rosa Mosqueta", "Colágeno Marinho"],
    correct: 0,
  },
  {
    question: "A linha 'Tea Tree' (Chá Verde) é indicada para qual tipo de pele?",
    options: ["Pele seca", "Pele madura", "Pele oleosa e com acne", "Pele com manchas"],
    correct: 2,
  },
  {
    question: "O Café de Chicória da linha Nutriplus auxilia principalmente na:",
    options: ["Melhora do sono", "Digestão", "Saúde das articulações", "Massa muscular"],
    correct: 1,
  },
  {
    question: "Qual a função principal da linha 'Lumi Radiance'?",
    options: ["Esfoliação profunda", "Tratamento de manchas e uniformização", "Proteção solar física", "Redução de olheiras"],
    correct: 1,
  },
  {
    question: "Os perfumes Hera e Shooter's são reconhecidos por:",
    options: ["Fragrâncias unissex", "Baixa fixação", "Fragrâncias exclusivas com alta fixação", "Uso infantil"],
    correct: 2,
  },
  {
    question: "Os 'Shakes Substitutos de Refeição' Nutriplus são voltados para:",
    options: ["Gerenciamento de peso", "Hidratação pós-treino", "Melhora da memória", "Tratamento de queda de cabelo"],
    correct: 0,
  },
  {
    question: "A Farmasi segue padrões de qualidade europeus. O que isso garante?",
    options: ["Produtos com metais pesados", "Uso livre de parabenos e sem testes em animais", "Apenas fragrâncias sintéticas fortes", "Que os produtos não podem ser exportados"],
    correct: 1,
  },
  {
    question: "As máscaras de cílios 'Zen' são famosas por serem:",
    options: ["Séruns de crescimento", "Demaquilantes", "Alta definição e best-sellers", "Cílios postiços magnéticos"],
    correct: 2,
  },
] as const;

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [showScorePulse, setShowScorePulse] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const question = QUESTIONS[questionIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => undefined);
  }, [questionIndex]);

  const choose = (optionIndex: number) => {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === question.correct) {
      setScore((value) => value + 1);
      setShowScorePulse(true);
      window.setTimeout(() => setShowScorePulse(false), 240);
    }
  };

  const next = () => {
    if (selected === null) return;
    if (questionIndex === QUESTIONS.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((value) => value + 1);
    setSelected(null);
  };

  const restart = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  return (
    <main className="quiz-shell">
      <audio ref={audioRef} src={AUDIO_URL} preload="auto" aria-label="Trilha sonora do quiz" />
      <div className="quiz-surface">
        {finished ? (
          <section className="result-card" aria-live="polite">
            <div className="result-mark"><Check size={38} strokeWidth={3} /></div>
            <h1>Parabéns!</h1>
            <p>Você completou o treinamento Farmasi.</p>
            <div className="result-score">{score}<span>/10</span></div>
            <button className="restart-button" type="button" onClick={restart}>
              <RotateCcw size={17} /> Refazer quiz
            </button>
          </section>
        ) : (
          <section aria-labelledby="quiz-title">
            <header className="quiz-header">
              <h1 id="quiz-title">Quiz Farmasi</h1>
              <div className={`score-badge ${showScorePulse ? "score-pulse" : ""}`}>Pontos: {score}</div>
            </header>

            <div className="progress-track" aria-label={`Progresso: questão ${questionIndex + 1} de ${QUESTIONS.length}`}>
              <div className="progress-fill" style={{ width: `${((questionIndex + 1) / QUESTIONS.length) * 100}%` }} />
            </div>

            <div className="question-count">Questão {questionIndex + 1} de {QUESTIONS.length}</div>
            <div className="question-box">{question.question}</div>

            <div className="answers" role="group" aria-label="Alternativas">
              {question.options.map((option, index) => {
                const isSelected = selected === index;
                const isCorrect = index === question.correct;
                const state = selected === null ? "" : isCorrect ? "answer-correct" : isSelected ? "answer-incorrect" : "answer-muted";
                return (
                  <button
                    key={option}
                    className={`answer-button ${state}`}
                    type="button"
                    onClick={() => choose(index)}
                    disabled={selected !== null}
                    aria-pressed={isSelected}
                  >
                    <span className="answer-number">{index + 1}</span>
                    <span className="answer-text">{option}</span>
                    {selected !== null && isCorrect && <Check className="answer-check" size={22} strokeWidth={3} />}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <button className="next-button" type="button" onClick={next}>
                {questionIndex === QUESTIONS.length - 1 ? "Finalizar" : "Próxima →"}
              </button>
            )}
          </section>
        )}
      </div>

    </main>
  );
}
