import axios from "axios";

export async function analyze(message: string) {
    try {
        const res = await axios.post("http://127.0.0.1:3000/analyze", {
            message
        });

        return res.data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to analyze');
    }
}