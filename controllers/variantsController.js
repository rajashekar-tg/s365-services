import { db } from "../config/db.js";

//to get all values
export const getVariants = (req, res) => {
  const q = "SELECT * FROM tbl_variants_master";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

//send all values to db
export const sendVariants = (req, res) => {
  const q =
    "INSERT INTO tbl_variants_master (`tfv_variant_name`, `tfv_variant_image_link`, `tfv_is_active`, `tfv_status_id`, `tfv_created_by`, `tfv_created_date_time`, `tfv_updated_by`, `tfv_updated_date_time`) VALUES(?)";
  const values = [
    req.body.tfv_variant_name,
    req.body.tfv_variant_image_link,
    req.body.tfv_is_active,
    req.body.tfv_status_id,
    req.body.tfv_created_by,
    req.body.tfv_created_date_time,
    req.body.tfv_updated_by,
    req.body.tfv_updated_date_time,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
