import React from "react";
import "./style.css";

export default function CreateChops({
  handleOpenDeleteButton,
  users,
  userData,
  openInput,
  handleSubmit,
  handleExperience,
  openButton,
  handleDelate,
  handleOpenInput,
  expe,
}) {
  return (
    <div className="user-expe-container">
      <div onClick={handleOpenDeleteButton} className="chip-container">
        {userData.map((user) => (
          <div>
            {user.expe === "" ? null : (
              <div className="chip-user-expe">
                <p>{user.expe}</p>
                {!openButton ? (
                  <></>
                ) : (
                  <button
                    className="btn-create-chip-delete"
                    onClick={() => handleDelate(user.id)}
                  >
                    X
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {!openInput ? (
        <></>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              onChange={(e) => handleExperience(e)}
              type="text"
              value={expe}
              placeholder="Expe.."
              className="input-expe-user"
            />
          </div>
        </form>
      )}
      <button className="btn-create-chip" onClick={handleOpenInput}>
        +
      </button>
    </div>
  );
}
