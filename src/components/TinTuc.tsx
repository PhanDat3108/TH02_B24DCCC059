import { useEffect, useState } from "react";
import axios from "axios";
import "./TinTuc.css";

interface BaiBao {
  id: number;
  tieuDe: string;
  lienKet: string;
  hinh: string;
}

const TinTuc = () => {
  const [ds, setDs] = useState<BaiBao[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((kq) => {
        const dsMoi = kq.data.results.map((b: any) => ({
          id: b.id,
          tieuDe: b.title,
          lienKet: b.url,
          hinh: b.image_url,
        }));
        setDs(dsMoi);
      })
      .catch(() => setDs([]));
  }, []);

  return (
    <div className="tin-tuc">
      <h2 className="tieu-de">Tin tức không gian</h2>

      <div className="ds-bai-bao">
        {ds.map((b) => (
          <div key={b.id} className="bai-bao">
            <img src={b.hinh} alt={b.tieuDe} className="anh-bao" />
            <div className="noi-dung">
              <h3>{b.tieuDe}</h3>
<a href={b.lienKet}>Đọc thêm</a>
            
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TinTuc;
