import { useEffect, useState } from "react";
import axios from "axios";
import "./DanhSachSinhVien.css";

interface SinhVien {
  id: number;
  ten: string;
  email: string;
  sdt: string;
}

const DanhSachSinhVien = () => {
  const [ds, setDs] = useState<SinhVien[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((kq) => {
        const dsMoi = kq.data.map((x: any) => ({
          id: x.id,
          ten: x.name,
          email: x.email,
          sdt: x.phone,
        }));
        setDs(dsMoi);
      })
      .catch(() => setDs([]));
  }, []);

  return (
    <div className="sinhvien">
      <h2 className="tieu-de">Danh sách sinh viên</h2>

      <div className="bang">
        <table>
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên sinh viên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            {ds.map((sv) => (
              <tr key={sv.id}>
                <td>{sv.id}</td>
                <td>{sv.ten}</td>
                <td>{sv.email}</td>
                <td>{sv.sdt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DanhSachSinhVien;
