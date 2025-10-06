import { useState } from "react";
import axios from "axios";
import "./ThoiTiet.css";

const ThoiTiet = () => {
  const [thanhPho, setThanhPho] = useState("");
  const [duLieu, setDuLieu] = useState<any>(null);

  const timKiem = async () => {
    try {
      const kq = await axios.get(`https://wttr.in/${thanhPho}?format=j1`);
      setDuLieu(kq.data);
    } catch {
      setDuLieu(null);
    }
  };

  return (
    <div className="thoi-tiet">
      <h2 className="tieu-de">Ứng dụng Thời tiết</h2>

      <div className="nhap-lieu">
        <input
          type="text"
          value={thanhPho}
          onChange={(e) => setThanhPho(e.target.value)}
          placeholder="Nhập tên thành phố..."
          className="o-nhap"
        />
        <button onClick={timKiem} className="nut-tim">
          Tìm kiếm
        </button>
      </div>

      {duLieu && (
        <div className="ket-qua">
          <h3>Kết quả cho: <span>{thanhPho}</span></h3>
          <div className="thong-tin">
            <p><strong>Nhiệt độ:</strong> {duLieu.current_condition[0].temp_C}°C</p>
            <p><strong>Thời tiết:</strong> {duLieu.current_condition[0].weatherDesc[0].value}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThoiTiet;
export {};
