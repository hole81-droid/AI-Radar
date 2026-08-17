import re
content = open('/Users/seunghoonlee/Desktop/AI-Radar/raw/2026-08/tmp/r_watermark_thread.xml').read()
idx = content.find('class=&quot;md&quot;')
snippet = content[idx:idx+2500]
snippet = snippet.replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&amp;', '&').replace('&#39;', "'")
print(snippet)
