import React, {FormEvent, useRef} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {InputGroup} from "react-bootstrap";

type AssetCreationFormProps = {}

const AssetCreationForm: React.FC<AssetCreationFormProps> = (props) => {
    const assetDescriptionInputRef = useRef<HTMLInputElement>(null);

    const assetCreationSubmitHandler = (event: FormEvent) => {
        console.log('creating asset with name ' + assetDescriptionInputRef.current!.value)
    }

    return (
        <div>
            <Form onSubmit={assetCreationSubmitHandler}>
                <InputGroup className="mb-3">
                    <Form.Control type="text" placeholder="Asset name" required
                                  ref={assetDescriptionInputRef}/>
                    <Button variant="primary" type="submit">Create asset</Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default AssetCreationForm;
