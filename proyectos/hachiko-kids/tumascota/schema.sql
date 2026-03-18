CREATE TABLE IF NOT EXISTS survey_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  hijos TEXT NOT NULL,
  comportamientos TEXT,
  comportamientos_otro TEXT,
  usaria TEXT NOT NULL,
  pagaria TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  user_agent TEXT,
  ip_country TEXT
);

CREATE INDEX IF NOT EXISTS idx_survey_email ON survey_responses(email);
CREATE INDEX IF NOT EXISTS idx_survey_created ON survey_responses(created_at);
