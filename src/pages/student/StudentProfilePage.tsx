import type { ReactNode } from 'react'
import { FigmaButton, FigmaInputField } from '../../components/figma/common'
import { studentProfile } from '../../mocks/studentProfile'
import './student-profile.css'

// Figma의 "수강생 — 마이 프로필 (/student/profile)" 프레임을 구현할 페이지입니다.
export function StudentProfilePage() {
  return (
    <div className="student-profile">
      <section className="student-profile__completion" aria-label="프로필 완성도">
        <div className="student-profile__score">{studentProfile.completion}</div>
        <div className="student-profile__completion-copy">
          <h2>프로필 완성도 {studentProfile.completion}%</h2>
          <p>{studentProfile.completionMessage}</p>
        </div>
        <div className="student-profile__edited">
          <span>마지막 수정</span>
          <strong>{studentProfile.lastEditedAt}</strong>
        </div>
      </section>

      <div className="student-profile__grid">
        <div className="student-profile__column">
          <ProfilePanel
            description="증명서에 그대로 반영되며 일부는 운영자만 수정 가능"
            title="기본 정보"
          >
            <div className="profile-avatar-row">
              <div className="profile-avatar">{studentProfile.avatarInitial}</div>
              <div className="profile-name">
                <h3>프로필 이미지</h3>
                <div className="profile-name__actions">
                  <FigmaButton kind="secondary">사진 변경</FigmaButton>
                  <FigmaButton kind="text">기본 이미지로</FigmaButton>
                </div>
              </div>
            </div>

            <div className="profile-form">
              <ReadonlyField label="이름 (운영자 수정)" value={studentProfile.name} />
              <FigmaInputField
                defaultValue={studentProfile.displayName}
                label="표시명 (증명서·공개 페이지 노출)"
                name="displayName"
              />
              <ReadonlyField label="과정 / 기수" value={studentProfile.course} />
            </div>
          </ProfilePanel>

          <ProfilePanel
            description="증명서 공개 시 검증자가 따라갈 수 있는 링크 (각 항목 공개 토글 별도)"
            title="외부 URL"
          >
            <div className="profile-form">
              {studentProfile.externalUrls.map((url) => (
                <FigmaInputField defaultValue={url.value} key={url.label} label={url.label} name={url.label} />
              ))}
            </div>
          </ProfilePanel>
        </div>

        <div className="student-profile__column">
          <ProfilePanel description="기술 태그 최대 10개. 드래그로 순서 변경. 사이트" title="스킬">
            <TagGroup items={studentProfile.skills} label="기술 태그" />
            <TagGroup items={studentProfile.interests} label="관심 직무" />
          </ProfilePanel>

          <ProfilePanel
            description="증명서 검증자나 내 공유 URL을 통해 도달한 모든 이가 볼 수 있는 정보"
            title="공개 설정"
          >
            <div className="visibility-list">
              {studentProfile.visibility.map((item) => (
                <div className="visibility-row" key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                  <span className={item.enabled ? 'profile-toggle is-on' : 'profile-toggle'} />
                </div>
              ))}
            </div>
          </ProfilePanel>
        </div>
      </div>

      <div className="student-profile__footer">
        <FigmaButton>변경사항 저장</FigmaButton>
      </div>
    </div>
  )
}

type ProfilePanelProps = {
  children: ReactNode
  description: string
  title: string
}

function ProfilePanel({ children, description, title }: ProfilePanelProps) {
  return (
    <section className="profile-panel">
      <div className="profile-panel__title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}

type ReadonlyFieldProps = {
  label: string
  value: string
}

function ReadonlyField({ label, value }: ReadonlyFieldProps) {
  return (
    <div className="readonly-field">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

type TagGroupProps = {
  items: string[]
  label: string
}

function TagGroup({ items, label }: TagGroupProps) {
  return (
    <div className="tag-group">
      <span>{label}</span>
      <div className="tag-list">
        {items.map((item) => (
          <span className="profile-tag" key={item}>
            {item}
          </span>
        ))}
        <FigmaButton kind="secondary">+ 추가</FigmaButton>
      </div>
    </div>
  )
}
