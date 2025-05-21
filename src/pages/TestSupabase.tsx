import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

function TestSupabase() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from("projects")
      .select("*")
      .then((res) => {
        if (res.data) setData(res.data);
      });
  }, []);

  return (
    <div>
      <h2>프로젝트 목록</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TestSupabase;
