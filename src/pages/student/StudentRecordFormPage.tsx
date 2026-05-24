import { Link, useParams } from 'react-router-dom'
import { FigmaButton, FigmaInputField, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import { recordFormCopy } from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

type RecordType = keyof typeof recordFormCopy

// Figma frames: 블로그/자격증/스터디 등록 폼
// recordType 파라미터에 따라 등록 화면의 제목과 입력 항목을 바꿉니다.
export function StudentRecordFormPage() {
  const { recordType = 'blog' } = useParams()
  const copy = recordFormCopy[(recordType as RecordType) in recordFormCopy ? (recordType as RecordType) : 'blog']

  return (
    <section className="student-workflow-page">
      <header className="student-workflow-head">
        <div>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </header>

      <section className="student-workflow-panel">
        <h2>기본 정보</h2>
        <div className="student-workflow-grid">
          {copy.fields.map((field) => (
            <FigmaInputField key={field} label={field} placeholder={`${field} 입력`} />
          ))}
        </div>
        <FigmaTextarea label={copy.textarea} placeholder="내용을 입력하세요." />
        <footer className="student-workflow-actions">
          <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecords}>
            목록으로
          </Link>
          <FigmaButton>저장</FigmaButton>
        </footer>
      </section>
    </section>
  )
}
