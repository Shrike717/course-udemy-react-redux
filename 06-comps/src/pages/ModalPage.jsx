import React from 'react'
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div>
    <Button primary onClick={handleClose}>I accept!</Button>
    </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept:
    </p>
  </Modal>

  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      { showModal && modal}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere officia quis dignissimos labore voluptates explicabo temporibus quas velit eaque error nobis vitae nam natus laborum totam, magnam optio voluptatibus culpa iusto libero! Quas fuga eos suscipit vitae? Voluptates nostrum dolore reiciendis debitis cum accusamus veniam laborum expedita eveniet. Illo reprehenderit porro eaque impedit, non explicabo illum rerum doloremque deleniti eos est a blanditiis autem suscipit sed similique, optio sapiente neque excepturi. Quas esse nam blanditiis error amet facilis, accusantium unde, sunt vitae nisi minus et excepturi sapiente consequatur aut? Distinctio saepe adipisci minus est praesentium ipsam, suscipit sapiente modi.</p>
    </div>

  );
}

export default ModalPage;
