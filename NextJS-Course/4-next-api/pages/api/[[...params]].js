// it does not catch routes that don't have parameters at all
// if it has mono [], but it does work with double square brackets
export default function hadler(req, res) {
  const params = req.query.params;
  res.status(200).json(params);
}
