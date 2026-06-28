import { Routes, Route, Navigate } from "react-router-dom";
import { InputBox } from "@/Components/InputBox/InputBox";

export const PageRouting = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/tap-rush-arena" replace />}
            />
            <Route path="/tap-rush-arena">
                <Route index element={<InputBox />} />
            </Route>
        </Routes>
    );
};
