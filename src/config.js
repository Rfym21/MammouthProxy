require('dotenv').config()

// Mammouth API配置
const MAMMOUTH_API_URL = 'https://mammouth.ai/api/models/llms'

// 模型映射表：OpenAI模型名称 -> Mammouth模型名称
const MODEL_MAPPING = {
  'claude-sonnet-4-20250514': 'anthropic-claude-4-2025-05-14',
  'gpt-4o-mini': 'openai-gpt-4o-mini',
  'gemini-2.5-pro': 'google-gemini-2.5-pro',
  'grok-4': 'xai-grok-4-0709',
  'gpt-5-thinking': 'openai-gpt-5-thinking',
  'gpt-5': 'openai-gpt-5',
  'gpt-5-mini': 'openai-gpt-5-mini',
}

const UNLIMITED_MODELS = [
  'gpt-4o-mini',
]

// 服务器配置
const SERVER_CONFIG = {
  PORT: process.env.PORT || 3000
}

// 账号管理器配置
const COOKIES = process.env.COOKIES || ""
const AUTH_TOKEN = process.env.AUTH_TOKEN || "sk-123456"


module.exports = {
  MODEL_MAPPING,
  UNLIMITED_MODELS,
  SERVER_CONFIG,
  MAMMOUTH_API_URL,
  COOKIES,
  AUTH_TOKEN,
} 