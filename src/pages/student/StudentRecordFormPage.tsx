import { Link, useParams } from 'react-router-dom'
import { FigmaButton, FigmaChip, FigmaInputField, FigmaNoticeBanner, FigmaTextarea } from '../../components/figma/common'
import { ROUTES } from '../../constants/routes'
import {
  blogRecordSubmissionWeeks,
  certificateFileFormats,
  certificateRecordTypes,
  recordFormCopy,
  studyEvidenceFiles,
} from '../../mocks/studentMissingPages'
import './student-missing-pages.css'

type RecordType = keyof typeof recordFormCopy

// Figma frames: 블로그/자격증/스터디 등록 폼
// recordType 파라미터에 따라 등록 화면의 제목과 입력 항목을 바꿉니다.
export function StudentRecordFormPage() {
  const { recordType = 'blog' } = useParams()
  const copy = recordFormCopy[(recordType as RecordType) in recordFormCopy ? (recordType as RecordType) : 'blog']

  if (recordType === 'blog') {
    return (
      <section className="student-workflow-page student-blog-form-page">
        <nav className="student-workflow-breadcrumb" aria-label="현재 위치">
          <span>기록실</span>
          <span>›</span>
          <span>블로그</span>
          <span>›</span>
          <strong>새 등록</strong>
        </nav>

        <FigmaNoticeBanner title="블로그 기록 기준">
          학습 과정, 문제 해결, 회고 내용을 사실 기반으로 작성해 주세요. 공개 전 개인정보와 외부 비공개 자료 포함 여부를
          확인합니다.
        </FigmaNoticeBanner>

        <section className="blog-week-selector" aria-label="블로그 제출 주차 선택">
          <header className="blog-week-selector__head">
            <div>
              <h2>
                <span />
                주차 선택
              </h2>
              <p>기수 기간 2026-03-04 ~ 2026-08-29 · 26주차</p>
            </div>
            <ul aria-label="주차 상태 범례">
              <li>
                <span className="is-current" />
                현재
              </li>
              <li>
                <span className="is-approved" />
                승인
              </li>
              <li>
                <span className="is-rejected" />
                반려
              </li>
            </ul>
          </header>

          <div className="blog-week-grid">
            {blogRecordSubmissionWeeks.map((week) => (
              <button
                className={`blog-week-card ${week.tone ? `blog-week-card--${week.tone}` : ''}`}
                key={`${week.week}-${week.range}`}
                type="button"
              >
                <strong>{week.week}</strong>
                <span>{week.range}</span>
                {'status' in week ? <em>{week.status}</em> : null}
              </button>
            ))}
          </div>
        </section>

        <div className="blog-selected-week" aria-live="polite">
          <span />
          선택: 12주차 · 5/13 ~ 5/19 (현재 주차)
        </div>

        <section className="blog-url-section" aria-label="블로그 URL 입력">
          <label htmlFor="blog-url">외부 블로그 글 URL</label>
          <p>공개 블로그 기능으로 https URL만 허용합니다 (인사팀 검사 증빙)</p>
          <div className="blog-url-input">
            <span aria-hidden="true">🔗</span>
            <input id="blog-url" placeholder="https://blog.example.com/posts/week-12" type="url" />
          </div>
          <small>ⓘ 주소창에서 https://로 시작하는 외부 URL인지 확인해 주세요.</small>
        </section>

        <footer className="blog-form-actions">
          <Link className="figma-button figma-button--secondary" to={ROUTES.studentRecords}>
            취소
          </Link>
          <div>
            <FigmaButton kind="secondary">임시 저장</FigmaButton>
            <FigmaButton>제출하기</FigmaButton>
          </div>
          <p>주차당 1개 블로그만 제출 가능합니다. 승인 여부는 3~10일 내외로 알려집니다.</p>
        </footer>
      </section>
    )
  }

  if (recordType === 'certificate') {
    return (
      <section className="student-workflow-page student-certificate-form-page">
        <nav className="student-workflow-breadcrumb" aria-label="현재 위치">
          <span>기록실</span>
          <span>›</span>
          <span>자격증</span>
          <span>›</span>
          <strong>새 등록</strong>
        </nav>

        <section className="certificate-form-stack" aria-label="자격증 등록 정보">
          <div className="certificate-type-section">
            <label>
              자격증 종류 <em>*</em>
              <small>아래 인증 가능한 3종</small>
            </label>
            <div className="certificate-type-grid">
              {certificateRecordTypes.map((certificate) => (
                <button
                  className={`certificate-type-card ${certificate.selected ? 'is-selected' : ''}`}
                  key={certificate.name}
                  type="button"
                >
                  <span>
                    <strong>{certificate.name}</strong>
                    <small>{certificate.description}</small>
                  </span>
                  {certificate.selected ? <i aria-hidden="true">✓</i> : null}
                </button>
              ))}
            </div>
          </div>

          <div className="certificate-title-field">
            <label>
              제목 <em>*</em>
            </label>
            <FigmaInputField aria-label="자격증 제목" label="" value="PCCP Lv.2 합격" readOnly />
          </div>

          <div className="certificate-upload-section">
            <label>
              증빙 파일 <em>*</em>
              <small>최대 30MB</small>
            </label>
            <div className="certificate-format-row">
              <span>지원 형식 ·</span>
              {certificateFileFormats.map((format) => (
                <FigmaChip key={format}>{format}</FigmaChip>
              ))}
            </div>

            <div className="certificate-upload-box">
              <div className="certificate-preview-card">
                <div className="certificate-preview-card__icon">📄</div>
                <div className="certificate-preview-card__body">
                  <span className="certificate-preview-card__badge">
                    <i />
                    인증서 미리보기
                  </span>
                  <h3>Python Certified Coding Professional</h3>
                  <p>홍 길 동</p>
                  <small>Level 2 · Passed · 2026-04-22</small>
                </div>
                <button aria-label="증빙 파일 보기" type="button">
                  ↗
                </button>
              </div>

              <div className="certificate-file-status">
                <span>✓</span>
                <strong>pccp_certificate.png</strong>
                <small>2.4MB</small>
                <small>— 업로드 완료</small>
                <button type="button">× 파일 제거</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="certificate-form-actions">
          <Link className="figma-button figma-button--text" to={ROUTES.studentRecords}>
            ‹ 이전·취소
          </Link>
          <div>
            <span>
              <i />
              종류 · 제목 · 파일 모두 입력됨
            </span>
            <FigmaButton>제출</FigmaButton>
          </div>
          <p>
            ⓘ 제출 후 강사·매니저 검토에서 사진과 자격증 종류·제목 일치 여부를 확인합니다. 반려 시 사유와 함께 기록실
            자격증 탭에 표시됩니다.
          </p>
        </footer>
      </section>
    )
  }

  if (recordType === 'study') {
    return (
      <section className="student-workflow-page student-study-form-page">
        <nav className="student-workflow-breadcrumb" aria-label="현재 위치">
          <span>기록실</span>
          <span>›</span>
          <span>스터디</span>
          <span>›</span>
          <strong>새 등록</strong>
        </nav>

        <section className="study-form-stack" aria-label="스터디 등록 정보">
          <div className="study-title-field">
            <label>
              제목 <em>*</em>
            </label>
            <FigmaInputField aria-label="스터디 제목" label="" placeholder="예) SKN22기 코테스터디 1회차" />
          </div>

          <div className="study-time-grid">
            <label>
              <span>
                시작 시간 <em>*</em>
              </span>
              <div className="study-time-input">
                <span aria-hidden="true">▣</span>
                <input aria-label="스터디 시작 시간" defaultValue="2026-05-14 19:00" />
              </div>
            </label>
            <label>
              <span>
                종료 시간 <em>*</em>
              </span>
              <div className="study-time-input">
                <span aria-hidden="true">◷</span>
                <input aria-label="스터디 종료 시간" defaultValue="2026-05-14 21:00" />
              </div>
            </label>
          </div>

          <div className="study-activity-field">
            <div>
              <label htmlFor="study-activity">스터디 활동 내역 *</label>
              <small>주요 목표·진행 내용·다음 액션을 3~5줄로 작성</small>
            </div>
            <textarea
              id="study-activity"
              placeholder={`예) DP 문제 4개를 함께 풀이하고 접근 방식을 비교했습니다.\n오늘 정리한 내용, 어려웠던 점, 다음 스터디 전까지 각자 준비할 일을 적어 주세요.`}
            />
          </div>

          <div className="study-evidence-section">
            <label>
              증빙자료 <em>*</em>
              <small>장당 최대 30MB</small>
            </label>
            <div className="certificate-format-row">
              <span>지원 형식 ·</span>
              {certificateFileFormats.map((format) => (
                <FigmaChip key={format}>{format}</FigmaChip>
              ))}
            </div>
          </div>

          <div className="study-upload-box">
            <div className="study-upload-dropzone">
              <div>⇧</div>
              <h3>사진을 드래그하거나 클릭해 업로드</h3>
              <p>일반 활동일 경우에는 3개 이상을 1개 이상 권장</p>
            </div>
            <div className="study-upload-progress">
              <span>
                <i />
                업로드 중
              </span>
              <small>총 6.5MB / 90MB</small>
              <div>
                <i />
              </div>
            </div>
            <div className="study-file-grid">
              {studyEvidenceFiles.map((file) => (
                <article key={file.name}>
                  <div>📷</div>
                  <strong>{file.name}</strong>
                  <small>{file.size}</small>
                </article>
              ))}
              <button type="button">
                <span>+</span>
                파일 추가하기
              </button>
            </div>
          </div>
        </section>

        <footer className="study-form-actions">
          <div>
            <Link className="figma-button figma-button--text" to={ROUTES.studentRecords}>
              ‹ 이전·취소
            </Link>
            <FigmaButton>제출</FigmaButton>
          </div>
          <p>ⓘ 제출 후 검토된 스터디 활동 내역과 증빙 사진은 기록실에 표시됩니다.</p>
        </footer>
      </section>
    )
  }

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
