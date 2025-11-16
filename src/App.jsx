import { useState } from 'react'
import './App.css'

function App() {
  const fullText = [
    "Научный отдел. День 411.\\pОбъект: образцы минералов \"R-type/7\".\nСтатус: предварительный.\nПервичный спектральный анализ показал аномальные радиационные сигнатуры. После вскрытия контейнера оказалось, что структура “камней” непостоянна. Материал реагирует на тепло и биосигнатуры.\\pГипотеза: это не минералы. Вероятно биологическое происхождение образцов.\nМедгруппа требует поместить образцы в карантин.\nОтправлено в архив. Доступ ограничен.\\p[411.08.12 14:22:01]\nSAMPLE_CONTAINER R-7 OPENED (USER: DR.MARQUEZ)\n[411.08.12 14:22:02]\nWARNING: BIO-SIGNATURE DETECTED INSIDE “MINERAL” SAMPLE\n[411.08.12 14:22:03]\nRECLASSIFICATION EVENT: GEOLOGICAL_SAMPLE → UNKNOWN_BIOLOGICAL_ENTITY\n[411.08.12 14:23:44]\nUSER REQUEST: INITIATE QUARANTINE PROTOCOL ALPHA-6\n[411.08.12 14:23:45]\nERROR: ACCESS DENIED (OVERRIDE SOURCE: UNKNOWN)",
    "Медотсек. День 412.\\p Поступил пострадавший — техник Харпер.\nПри осмотре обнаружены множественные проколы кожи, заражение тканей неизвестного генеза.\nВ ране обнаружена полупрозрачная, волокнистая и подвижная структура.\nВведен карантин.\\pоно понимает, что я пишу, оноыапффавлыод\\p[412.08.13 02:11:55]\nMEDBAY ALERT: PATIENT HARPER—UNUSUAL NEURAL ACTIVITY\n[412.08.13 02:12:03]\nWARNING: FOREIGN BIO-MOVEMENT TRACKED (LOCATION: SPINAL CANAL)\n[412.08.13 02:13:22]\nSECURITY REQUESTED AT MEDBAY (PRIORITY: HIGH)\n[412.08.13 02:14:03]\nSECURITY RESPONSE CANCELLED (SOURCE: “HARPER”)\n[412.08.13 14:23:44]\nUSER REQUEST: INITIATE QUARANTINE PROTOCOL ALPHA-6\n[412.08.13 14:23:45]\nQUARANTINE ENACTED",
    "Научный отдел. День 415. Доступ ограничен.\\p\"Пациент ноль\" полностью захвачен симбиотом. Существо контролирует моторные функции и, судя по всему, сохраняет доступ к памяти носителя.\\pКарантин нарушен - один из исследователей впустил инфицированного в лаборатории. Распространение носителей растёт экспоненциально.\\pПредполагаемая структура: ульевой интеллект.\\pПримечание: инженерные шлюзы заблокированы изнутри. Возможно, последние выжившие пытаются держать оборону.\\p[414.08.15 18:44:12]\nCREW STATUS: 21 MISSING, 9 UNREACHABLE, 4 CONFIRMED DEAD\n[414.08.15 18:44:13]\nCREW DOOR OVERRIDE: LAB A → OPEN (USER: RESEARCHER GRAVES)\n[414.08.15 18:44:14]\nNOTE: USER GRAVES LISTED AS \"DECEASED\" (412.08.13)\n[414.08.15 18:44:15]\nSECURITY FLAG: POTENTIAL IDENTITY COMPROMISE\n[414.08.15 18:44:16]\nLOGGING SUPPRESSED (OVERRIDE SOURCE: UNKNOWN)",
    "SYSTEM LOG: DAY 417\\p[417.08.18 07:00:00]\nFAILSAFE TRIGGERED—24H WITHOUT AUTHORIZED INPUT\n[417.08.18 07:00:01]\nSECONDARY SYSTEMS SHUTDOWN: LIFE SUPPORT (PARTIAL), SUBLIGHT ENGINES, AUTO-NAV\n[417.08.18 07:05:33]\nENGINEERING HATCH SEALED (USER: OFFICER KING)\n[417.08.18 07:06:00]\nMOTION DETECTED OUTSIDE ENGINEERING. COUNT: >45\n[417.08.18 07:07:11]\nBIOSIGNATURES MATCH UNKNOWN SYMBIOTIC SPECIES\n[417.08.18 07:08:00]\nAUDIO FEED LOST\n[417.08.18 17:43:51]\nNAVCON ACCESS REQUESTED (USER: <UNREGISTERED>)\n[417.08.18 17:43:52]\nACCESS GRANTED (OVERRIDE: PRIORITY-0)\n[417.08.18 17:43:59]\nMULTIPLE INPUT STREAMS DETECTED — SOURCE COUNT: ~100"
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = fullText.length
  
  const currentPageText = fullText[currentPage] || ''
  // Разделяем по \p на абзацы (в строке \p это два символа: обратный слэш и p)
  // Внутри каждого абзаца \n уже является символом новой строки и будет отображаться благодаря whiteSpace: 'pre-line'
  const paragraphs = currentPageText
    .split('\\p')  // Разделяем по \p (обратный слэш + p)
    .filter(p => p.trim() !== '')

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="App">
      <div className="header">
        {currentPage > 0 && (
          <button className="nav-arrow" onClick={handlePrev}>&lt;&lt;</button>
        )}
        {currentPage === 0 && <span className="nav-placeholder"></span>}
        <h1>Бортовой журнал</h1>
        {currentPage < totalPages - 1 && (
          <button className="nav-arrow" onClick={handleNext}>&gt;&gt;</button>
        )}
        {currentPage === totalPages - 1 && <span className="nav-placeholder"></span>}
      </div>
      <div className="content">
        {paragraphs.map((paragraph, index) => (
          <p key={index} style={{ whiteSpace: 'pre-line' }}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default App

