function VisibilityControl({ setShowCompleted, deleteTask, isCheked }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      deleteTask();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isCheked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label htmlFor="">Show tasks done</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
}

export default VisibilityControl;
