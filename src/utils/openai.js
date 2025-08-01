import OpenAI from 'openai';
import { OpenAI_API_KEY } from './constants';

const openai = new OpenAI({
    apiKey: OpenAI_API_KEY,
    dangerouslyAllowBrowser: true // This is only for development purposes, not recommended for production
});

export default openai;