import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AddProjectPage = ({ addProjectSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("B2C");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState([0, 1000]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newProject = {
      title,
      type,
      description,
      location,
      price,
      name,
      email,
      phoneNumber,
      file,
    };
    addProjectSubmit(newProject);
    toast.success("Project added!");
    return navigate("/companies");
  };

  return (
    <section className="text-gray-900">
      <div className="container m-auto max-w-xl py-24 ">
        <div className="bg-indigo-50 px-6 py-8 mb-4 shadow-md rounded-2xl rounded-mb-border md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add project that you need help with.
            </h2>
            <div className="mb-4 py-3">
              <label className="ml-4 block text-gray-900 font-bold mb-2">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Awesome Project Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div className="mb-4">
                <label className="ml-4 block font-bold mb-2">
                  Project type
                </label>
                <select
                  name="type"
                  id="type"
                  className="border rounded w-full py-2 px-3"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value="B2B">B2B</option>
                  <option value="B2C">B2C</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="ml-4 block font-bold mb-2">Description</label>
                <textarea
                  rows={6}
                  className="border rounded w-full py-2 px-3 mb-2"
                  id="description"
                  name="description"
                  placeholder="Describe your project"
                  value={description}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <div className="mb-4">
                  <label htmlFor="" className="ml-4 block font-bold mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Awesome Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="ml-4 block font-bold mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Awesome Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="ml-4 block font-bold mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Awesome Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="ml-4 block font-bold mb-2">
                    Your phone
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Awesome Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="" className="ml-4 block font-bold mb-2">
                    Your email
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="border rounded w-full py-2 px-3 mb-2"
                    placeholder="Awesome Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
