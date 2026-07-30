-- Mail.app으로 첨부 메일을 보낸다. send-scan.mjs가 osascript로 호출한다.
-- 인자: 1=제목 2=본문 3=받는사람 4=발신주소("" 이면 기본계정) 5="send"|"draft" 6..n=첨부 POSIX 경로
-- 자격증명은 Mail.app이 이미 갖고 있으므로 이 스크립트는 비밀정보를 다루지 않는다.

on run argv
	set theSubject to item 1 of argv
	set theBody to item 2 of argv
	set theTo to item 3 of argv
	set theSender to item 4 of argv
	set theMode to item 5 of argv

	set attachCount to (count of argv) - 5
	set isDraft to (theMode is not "send")

	tell application "Mail"
		set msg to make new outgoing message with properties {subject:theSubject, content:theBody, visible:isDraft}
		tell msg
			make new to recipient at end of to recipients with properties {address:theTo}
			if theSender is not "" then set sender to theSender
			repeat with i from 6 to (count of argv)
				set p to (item i of argv)
				try
					tell content
						make new attachment with properties {file name:(POSIX file p as alias)} at after last paragraph
					end tell
				on error errMsg
					return "ERROR attach " & p & ": " & errMsg
				end try
			end repeat
		end tell

		-- 첨부가 실제로 붙을 시간을 준다 (파일 수에 비례)
		delay (1 + attachCount * 0.6)

		if isDraft then
			save msg
			return "draft"
		else
			try
				send msg
				return "sent"
			on error errMsg
				return "ERROR send: " & errMsg
			end try
		end if
	end tell
end run
