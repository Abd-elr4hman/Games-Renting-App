import { useEffect, useState } from "react";
import { addGame } from "../../../../api";
import { UserAuth } from "../../../context/AuthContext";
import { storage } from "../../../../src/firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function AddGame() {
  const [formData, setFormData] = useState(null);
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);
  const [error, setError] = useState(null);
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      // firebase storage
      const imgName = new Date().getTime() + file.name;
      console.log(imgName);
      const storageRef = ref(storage, imgName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setFormData((prev) => ({
              ...prev,
              imageUrl: downloadURL,
            }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  console.log(formData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // form data destructured
    const name = formData.name;
    const description = formData.description;
    const price = formData.price;
    const imageUrl = formData.imageUrl;

    try {
      await addGame(name, description, price, user.uid, imageUrl);
      navigate("/host");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="add-game-form--container">
      <h1>New game information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            placeholder="image"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="login--form--button--container">
          <button
            className="btn btn-primary login--form--button"
            disabled={per !== null && per < 100}
          >
            {per !== null && per < 100 ? "Submit" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddGame;
