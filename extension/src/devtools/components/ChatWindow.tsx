import { useState } from "react";
import { analyze } from "../../api/backendClient";

export default function ChatWindow() {
    const [message, setMessage] = useState("");
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        console.log('clicked')
        if (!message) return;

        setLoading(true);
        try {
            const response = await analyze(message);
            setResult(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 12 }}>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe the issue..."
                style={{ width: "100%", height: 80 }}
            />

            <button onClick={handleSend} disabled={loading}>
                {loading ? "Analyzing..." : "Analyze"}
            </button>

            {result && (
                <div style={{ marginTop: 20 }}>
                    <h3>Summary</h3>
                    <p>{result.summary}</p>

                    <h4>Root Cause</h4>
                    <p>{result.rootCause}</p>

                    <h4>Fixes</h4>
                    <ul>
                        {result.fixes?.map((fix: string, i: number) => (
                            <li key={i}>{fix}</li>
                        ))}
                    </ul>

                    <h4>Severity</h4>
                    <p>{result.severity}</p>
                </div>
            )}
        </div>
    );
}