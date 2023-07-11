import { db } from "../config/db.js";

//to get all mandal data fro db
export const getMandals = (req, res) => {
  const q = "select * from tbl_mandals_master";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

//to create mandal data in db
export const createMandal = (req, res) => {
  const q =
    "INSERT INTO tbl_mandals_master (`tfm_mandals_name`,`tfm_created_by`,`tfm_mandals_zipcode`,`tfm_created_date_time`,`tfm_updated_by`,`tfm_updated_date_time`,`fk_tfm_state_id`,`fk_tfm_district_id`) VALUES(?)";
  const values = [
    req.body.tfm_mandals_name,
    req.body.tfm_created_by,
    req.body.tfm_mandals_zipcode,
    req.body.tfm_created_date_time,
    req.body.tfm_updated_by,
    req.body.tfm_updated_date_time,
    req.body.fk_tfm_state_id,
    req.body.fk_tfm_district_id,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    // return res.json("mandals created successfully");
    return res.json(data);
  });
};

//delete mandal by specific id
export const deleteMandal = (req, res) => {
  const mandalId = req.params.id;
  const q = "DELETE FROM tbl_mandals_master WHERE tfm_mandals_id= ? ";
  db.query(q, [mandalId], (err, data) => {
    if (err) return res.json(err);
    return res.json("mandals delet successfully");
  });
};


