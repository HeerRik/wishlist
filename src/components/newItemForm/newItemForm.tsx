"use client"

import type { FormEvent } from 'react'
import { useState } from 'react'
import { useAPI } from '@/hooks/useAPI'
import { BasicInput, BasicTextarea } from '@/components/basicInput'
import { Button } from '@/components/button'
import classes from './newItemForm.module.scss'

export const NewItemForm = () => {
    const [pass, setPass] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { post } = useAPI();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setLoading(true);
        const elements = Array.from(e.currentTarget.elements) as Array<HTMLInputElement | HTMLTextAreaElement>;
        const req = elements.reduce((acc: { [x: string]: string }, element) => {
            if (element.name && element.value)
                acc[element.name] = element.value;

            return acc;
        }, {});

        const res = await post({
            route: 'super/secret/route/item/create',
            body: {
                ...req,
                yoinkable: true,
            },
        });
        setSuccess(res.success);
        setLoading(false);
    }

    const resetForm = () => {
        setSubmitted(false)
    }

    return submitted ? (
        loading ? (
            <p>{'Momentje...'}</p>
        ) : success ? (
            <div>
                <p>{'Gelukt! Nog eentje?'}</p>
                <Button
                    onClick={resetForm}
                >
                    {'Ojaseker'}
                </Button>
            </div>
        ) : (
            <div>
                <p>{'Kak, er ging iets naar de gedver. Nieuwe poging doen?'}</p>
                <Button
                    onClick={resetForm}
                >
                    {'Ojaseker'}
                </Button>
            </div>
        )
    ) : (
        <form
            className={classes.form}
            onSubmit={handleSubmit}
        >
            <BasicInput
                identifier={'name'}
                label={'Naam'}
            />
            <BasicInput
                identifier={'code'}
                label={'Code'}
            />
            <BasicTextarea
                identifier={'description'}
                label={'Beschrijving'}
            />
            <BasicInput
                identifier={'short_description'}
                label={'Beschrijving maar dan kort'}
            />
            <BasicInput
                identifier={'image'}
                label={'Linkje naar afbeelding'}
            />
            <BasicInput
                identifier={'pass'}
                label={'Wachtwoord'}
                type={'password'}
                onChange={(event) => {
                    setPass(event.target.value)
                }}
                value={pass}
            />
            <Button
                type={'submit'}
            >
                {'Yep ✅'}
            </Button>
        </form>
    )
}